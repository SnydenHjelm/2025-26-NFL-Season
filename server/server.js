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

    return new Response(`{"error": "Bad Request"}`, {headers: headersOBJ});
}

Deno.serve(handler);