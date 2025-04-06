function handler(req) {
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("content-type", "application/json");
    if (req.method === "OPTIONS") {
        return new Response(null, {headers: headers});
    }

    const url = new URL(req.url);
    if (url.pathname === "/draftees" && req.method === "GET") {
        let draftees = Deno.readTextFileSync("../db/draft.json");
        return new Response(draftees, {headers: headers});
    } else if (url.pathname === "/standings" && req.method === "GET") {
        let teams = Deno.readTextFileSync("../db/standings.json");
        return new Response(teams, {headers: headers});
    }

    return new Response(`{"error": "Bad Request"}`, {headers: headers});
}

Deno.serve(handler);