async function displayGames(week) {
    let parent = document.querySelector(`#week${week}`);
    let req = new Request(`http://localhost:8000/week/${week}`);
    let resp = await fetch(req);
    let reso = await resp.json();
    if (reso.length === 0) {
        let p = document.createElement("p");
        p.id = "no-games";
        p.textContent = "No games to show";
        parent.appendChild(p);
        return;
    }
    
    parent.innerHTML = "";
    let redOrBlue = true
    for (let game of reso) {
        let team1 = await Team.teamByNickname(game.teams[0]);
        let team2 = await Team.teamByNickname(game.teams[1]);
        let team1Record = "";
        let team2Record = "";
        if (team1.ties !== 0) {
            team1Record = `${team1.wins}-${team1.losses}-${team1.ties}`;
        } else {
            team1Record = `${team1.wins}-${team1.losses}`;
        }

        if (team2.ties !== 0) {
            team2Record = `${team2.wins}-${team2.losses}-${team2.ties}`;
        } else {
            team2Record = `${team2.wins}-${team2.losses}`;
        }

        let div = document.createElement("div");
        div.classList.add("week-game");
        if (!redOrBlue) {
            div.classList.add("blue");
            redOrBlue = true;
        } else {
            redOrBlue = false;
        }

        if (game.primetime !== "None") {
            div.innerHTML = `
            <img src="../images/${game.primetime}.png">
            <p>${game.teams[0]}<br>${team1Record}</p>
            <img src="../images/${game.teams[0]}.png">
            <p class="score">${game.score}</p>
            <img src="../images/${game.teams[1]}.png">
            <p>${game.teams[1]}<br>${team2Record}</p>
            `
        } else {
            div.innerHTML = `
            <img src="../images/nfl.png">
            <p>${game.teams[0]}<br>${team1Record}</p>
            <img src="../images/${game.teams[0]}.png">
            <p class="score">${game.score}</p>
            <img src="../images/${game.teams[1]}.png">
            <p>${game.teams[1]}<br>${team2Record}</p>
            `
        }
        parent.appendChild(div);
    }
}

async function driver() {
    let week = document.querySelector("#week-nr");
    await displayGames(parseInt(week.value));
}

document.querySelector("#submit").addEventListener("click", async () => {
    let week = document.querySelector("#week-nr");
    let team1 = document.querySelector("#team1");
    let team2 = document.querySelector("#team2");
    let score = document.querySelector("#score");
    let primetime = document.querySelector("#primetime");

    let obj = {
        week: week.value,
        teams: [team1.value, team2.value],
        score: score.value,
        primetime: primetime.value
    };
    let newGame = new Game(obj);
    let req = new Request("http://localhost:8000/game", {
        method: "POST",
        body: JSON.stringify(newGame),
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    if (resp.ok) {
        let reso = await resp.text();
        document.querySelector(".status").textContent = reso;
        await displayGames(parseInt(week.value));
        team1.value = "";
        team2.value = "";
        score.value = "";
        primetime.value = "None";
    } else {
        let reso = await resp.text();
        document.querySelector(".status").textContent = reso;
    }
});

driver();