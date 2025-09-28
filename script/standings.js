async function driver() {
    const divs = ["North", "East", "South", "West"];
    for (let div of divs) {
        await Team.displayDivision("AFC", div);
        await Team.displayDivision("NFC", div);
    }
}

async function getTeams() {
    let conf = document.querySelector("#conf");
    let divi = document.querySelector("#divi");
    let teams = await Team.byDivision(conf.value, divi.value);
    let parent = document.querySelector("#patch-teams");
    parent.innerHTML = "";
    for (let team of teams) {
        let div = document.createElement("div");
        if (team.nickname === "49ers") {
            div.id = "fortyniners";
        } else {
            div.id = team.nickname;
        }
        div.innerHTML = `
        <select>
        <option>${team.nickname}</option>
        </select>
        <select id="add">
        <option>Win</option>
        <option>Loss</option>
        <option>Tie</option>
        <option>Bye</option>
        </select>
        `;
        parent.appendChild(div);
    }
    let button = document.createElement("button");
    button.textContent = "Submit";
    button.id = "submit";
    button.addEventListener("click", async () => {
        let team1;
        let team2;
        let team3;
        let team4;
        if (teams[0].nickname === "49ers") {
            team1 = document.querySelector("#fortyniners");
        } else {
            team1 =  document.querySelector(`#${teams[0].nickname}`);
        }
        if (teams[1].nickname === "49ers") {
            team2 = document.querySelector("#fortyniners");
        } else {
            team2 =  document.querySelector(`#${teams[1].nickname}`);
        }
        if (teams[2].nickname === "49ers") {
            team3 = document.querySelector("#fortyniners");
        } else {
            team3 =  document.querySelector(`#${teams[2].nickname}`);
        }
        if (teams[3].nickname === "49ers") {
            team4 = document.querySelector("#fortyniners");
        } else {
            team4 =  document.querySelector(`#${teams[3].nickname}`);
        }
        await patchTeams(team1, team2, team3, team4);
    });
    parent.appendChild(button);
}

async function patchTeams(team1, team2, team3, team4) {
    let arr = [
        {team: team1.children[0].value, add: team1.children[1].value},
        {team: team2.children[0].value, add: team2.children[1].value},
        {team: team3.children[0].value, add: team3.children[1].value},
        {team: team4.children[0].value, add: team4.children[1].value}
    ]

    let req = new Request("http://localhost:8000/standings/patch", {
        method: "PATCH",
        body: JSON.stringify(arr),
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    let reso = await resp.text();
    document.querySelector("#status").textContent = reso;
    document.querySelector("#division-tables").innerHTML = "";
    document.querySelector("#patch-teams").innerHTML = "";
    await driver();
}

document.querySelector("#get-teams").addEventListener("click", getTeams);

driver();