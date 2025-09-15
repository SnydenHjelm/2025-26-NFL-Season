async function handler(req) {
    const headersOBJ = new Headers();
    headersOBJ.set("Access-Control-Allow-Origin", "*");
    headersOBJ.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PATCH, DELETE");
    headersOBJ.set("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        return new Response(null, {headers: headersOBJ});
    }

    // console.log(req);

    const url = new URL(req.url);
    const weekPath = new URLPattern({pathname: "/week/:number"});
    const weekMatch = weekPath.exec(url);

    if (url.pathname === "/draftees" && req.method === "GET") {
        let draftees = Deno.readTextFileSync("../db/draft.json");
        headersOBJ.set("content-type", "application/json");
        return new Response(draftees, {headers: headersOBJ});
    } else if (url.pathname === "/standings" && req.method === "GET") {
        let teams = Deno.readTextFileSync("../db/standings.json");
        headersOBJ.set("content-type", "application/json");
        return new Response(teams, {headers: headersOBJ});
    }

    if (url.pathname === "/draftees" && req.method === "POST") {
        if (req.headers.get("content-type") !== "application/json") {headersOBJ.set("status", 400); return new Response("Wrong content-type, JSON expected"), {headers: headersOBJ}};
        let data = await req.json();
        if (typeof data !== "object") {headersOBJ.set("status", 400); return new Response("Unsupported Data type"), {headers: headersOBJ}};

        if (!data.round || typeof data.round !== "number" || data.round > 7 || data.round <= 0) {
            headersOBJ.set("status", 400);
            return new Response("Invalid round. Round must be a number between 1-7", {headers: headersOBJ});
        }

        if (!data.pick || typeof data.pick !== "number" || data.pick > 32 || data.pick <= 0) {
            headersOBJ.set("status", 400);
            return new Response("Invalid pick. Pick must be a number between 1-32", {headers: headersOBJ});
        }

        let draftees = JSON.parse(Deno.readTextFileSync("../db/draft.json"));
        let exist = draftees.find((x) => x.round === data.round && x.pick === data.pick);
        if (exist) {headersOBJ.set("status", 400); return new Response("Error. Pick is already in database", {headers: headersOBJ})};

        if (!data.team || typeof data.team !== "string") {
            headersOBJ.set("status", 400);
            return new Response("Invalid team. Must be a string", {headers: headersOBJ});
        }

        let teamExist = JSON.parse(Deno.readTextFileSync("../db/standings.json")).find((x) => x.nickname.toLowerCase() === data.team.toLowerCase());
        if (!teamExist) {headersOBJ.set("status", 400); return new Response("Team does not exist", {headers: headersOBJ})};

        if (!data.position || typeof data.position !== "string") {
            headersOBJ.set("status", 400);
            return new Response("Invalid position. Must be a string", {headers: headersOBJ});
        }

        if (!data.name || typeof data.name !== "string") {
            headersOBJ.set("status", 400);
            return new Response("Invalid name. Must be a string", {headers: headersOBJ});
        }

        if (!data.college || typeof data.college !== "string") {
            headersOBJ.set("status", 400);
            return new Response("Invalid college. Must be a string", {headers: headersOBJ});
        }


        
        let db = JSON.parse(Deno.readTextFileSync("../db/draft.json"));
        db.push({round: data.round, pick: data.pick, team: data.team, position: data.position, name: data.name, college: data.college});
        Deno.writeTextFileSync("../db/draft.json", JSON.stringify(db));
        return new Response("Player added successfully", {headers: headersOBJ});
    }

    if (req.method === "POST" && url.pathname === "/game") {
        if (req.headers.get("content-type") !== "application/json") {headersOBJ.set("status", 400); return new Response("Wrong content-type, JSON expected"), {headers: headersOBJ}};
        let reqBody = await req.json();

        if (!reqBody.week || typeof parseInt(reqBody.week) !== "number") {
            return new Response("One or more attributes missing or invalid, bad request", {status: 400, headers: headersOBJ});
        }

        if (!reqBody.teams || !Array.isArray(reqBody.teams) || reqBody.teams.length !== 2) {
            return new Response("One or more attributes missing or invalid, bad request", {status: 400, headers: headersOBJ});
        }

        if (!reqBody.score || typeof reqBody.score !== "string") {
            return new Response("One or more attributes missing or invalid, bad request", {status: 400, headers: headersOBJ});
        }

        if (!reqBody.primetime || typeof reqBody.primetime !== "string") {
            return new Response("One or more attributes missing or invalid, bad request", {status: 400, headers: headersOBJ});
        }

        let allTeams = JSON.parse(Deno.readTextFileSync("../db/standings.json"));
        let team1 = allTeams.find((x) => x.nickname.toLowerCase() === reqBody.teams[0].toLowerCase());
        let team2 = allTeams.find((x) => x.nickname.toLowerCase() === reqBody.teams[1].toLowerCase());

        if (!team1 || !team2) {
            return new Response("One or both teams don't exist, try again", {status: 400, headers: headersOBJ});
        }

        
        let obj = {
            week: parseInt(reqBody.week),
            teams: reqBody.teams,
            score: reqBody.score,
            primetime: reqBody.primetime
        }
        let allGames = JSON.parse(Deno.readTextFileSync("../db/games.json"));
        allGames.push(obj);
        Deno.writeTextFileSync("../db/games.json", JSON.stringify(allGames));
        return new Response("Game added succesfully", {headers: headersOBJ});
    }

    if (req.method === "GET" && weekMatch) {
        let weekNum = parseInt(weekMatch.pathname.groups.number);
        let allWeekGames = JSON.parse(Deno.readTextFileSync("../db/games.json"));
        let weekGames = allWeekGames.filter((x) => x.week === weekNum);
        headersOBJ.set("content-type", "application/json");
        return new Response(JSON.stringify(weekGames), {headers: headersOBJ});
    }
    
    if (req.method === "PATCH" && url.pathname === "/standings/patch") {
        if (req.headers.get("content-type") !== "application/json") {headersOBJ.set("status", 400); return new Response("Wrong content-type, JSON expected"), {headers: headersOBJ}};
        let reqBody = await req.json();
        let allTeams = JSON.parse(Deno.readTextFileSync("../db/standings.json"));
        for (let team of reqBody) {
            let index = allTeams.findIndex((x) => x.nickname === team.team);
            if (team.add === "Win") {
                allTeams[index].wins++
            } else if (team.add === "Loss") {
                allTeams[index].losses++
            } else if (team.add === "Tie") {
                allTeams[index].ties++
            }
        }
        Deno.writeTextFileSync("../db/standings.json", JSON.stringify(allTeams));
        return new Response("Records successfully changed", {headers: headersOBJ}); 
    }

    return new Response(`Bad Request`, {status: 400, headers: headersOBJ});
}

Deno.serve(handler);