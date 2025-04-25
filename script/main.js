class Draftee {
    static async byCollege(college) {
        let draftees = await Draftee.getDraftees();
        return draftees.filter((x) => x.college.toLowerCase() === college.toLowerCase());
    }
    static async byPosition(pos) {
        let draftees = await Draftee.getDraftees();
        return draftees.filter((x) => x.position === pos.toUpperCase());
    }
    static async byRound(round) {
        let draftees = await Draftee.getDraftees();
        return draftees.filter((x) => x.round === round);
    }
    static async displayDraftees() {
        let blueOrRed = 1;
        let draftees = await Draftee.getDraftees();
        draftees.sort((a, b) => a.pick - b.pick);
        draftees.sort((a, b) => a.round - b.round);
        const draftBoard = document.querySelector("#draft-board");
        draftBoard.innerHTML = "";

        for (let draftee of draftees) {
            if (draftee.pick === 1) {
                if (blueOrRed) {
                    draftBoard.innerHTML += `
                    <div id="round-${draftee.round}" class="drafted-player">
                        <p>Round: ${draftee.round}</p> 
                        <p>Pick: ${draftee.pick}</p>
                        <img class="team" src="../images/${draftee.team.toLowerCase()}.png">
                        <p>${draftee.position}</p>
                        <p>${draftee.name}</p>
                        <p>${draftee.college}</p>
                    </div>
                    `;
                    blueOrRed = 0;
                } else {
                    draftBoard.innerHTML += `
                    <div id="round-${draftee.round}" class="drafted-player blue">
                        <p>Round: ${draftee.round}</p> 
                        <p>Pick: ${draftee.pick}</p>
                        <img class="team" src="../images/${draftee.team.toLowerCase()}.png">
                        <p>${draftee.position}</p>
                        <p>${draftee.name}</p>
                        <p>${draftee.college}</p>
                    </div>
                    `;
                    blueOrRed = 1;
                }
            } else {
                if (blueOrRed) {
                    draftBoard.innerHTML += `
                    <div class="drafted-player">
                        <p>Round: ${draftee.round}</p> 
                        <p>Pick: ${draftee.pick}</p>
                        <img class="team" src="../images/${draftee.team.toLowerCase()}.png">
                        <p>${draftee.position}</p>
                        <p>${draftee.name}</p>
                        <p>${draftee.college}</p>
                    </div>
                    `;
                    blueOrRed = 0;
                } else {
                    draftBoard.innerHTML += `
                    <div class="drafted-player blue">
                        <p>Round: ${draftee.round}</p> 
                        <p>Pick: ${draftee.pick}</p>
                        <img class="team" src="../images/${draftee.team.toLowerCase()}.png">
                        <p>${draftee.position}</p>
                        <p>${draftee.name}</p>
                        <p>${draftee.college}</p>
                    </div>
                    `;
                    blueOrRed = 1;
                }
            }
            
        }
    }
    static async getDraftees() {
        const req = new Request("http://localhost:8000/draftees");
        let draftees = await fetch(req);
        draftees = await draftees.json();
        return draftees;
    }
    constructor(drafteeData) {
        this.round = drafteeData.round;
        this.pick = drafteeData.pick;
        this.team = drafteeData.team;
        this.position = drafteeData.position.toUpperCase();
        this.name = drafteeData.name;
        this.college = drafteeData.college;
    }
}

class Player {
    static all = [];
    static byId(id) {
        return Player.all.find((x) => x.id === id);
    }
    static byName(name) {
        return Player.all.find((x) => x.name.toLowerCase() === name.toLowerCase());
    }
    static allByTeam(nickname) {
        let teamID = Team.teamIDByNickname(nickname);
        return Player.all.filter((x) => x.teamId === teamID);
    }
    static allByPosition(pos) {
        return Player.all.filter((x) => x.shortPos === pos.toUpperCase());
    }
    constructor(playerData) {
        this.id = Player.all.length + 1;
        this.name = playerData.name;
        this.position = playerData.position;
        this.shortPos = playerData.shortPos;
        this.teamId = Team.teamIDByNickname(playerData.playsFor);
        this.constructor.all.push(this);
    }
    get playsFor() {
        return Team.teamNameByID(this.teamId);
    }
    get pos() {return this.position};
    set changeTeam(nickname) {
        let teamID = Team.teamIDByNickname(nickname);
        this.teamId = teamID;
    }
}

class Team {
    static async getTeams() {
        const req = new Request("http://localhost:8000/standings");
        let teams = await fetch(req);
        teams = await teams.json();
        return teams;
    }
    static async byConferance(conf) {
        let teams = await Team.getTeams();
        return teams.filter((x) => x.conferance === conf.toUpperCase());
    }
    static async byDivision(conf, div) {
        let teams = await Team.getTeams();
        return teams.filter((x) => x.conferance === conf.toUpperCase() && x.division.toLowerCase() === div.toLowerCase());
    }
    static async displayDivision(conf, div) {
        let teams = await Team.byDivision(conf, div);
        teams = teams.sort((a, b) => b.tiebreaker - a.tiebreaker);
        teams = teams.sort((a, b) => b.wins - a.wins);
        let container = document.createElement("div");
        container.classList.add(conf.toLowerCase());
        container.id = `${conf.toLowerCase()}-${div.toLowerCase()}`;
        container.innerHTML = `<h2 class="div-name">${conf} ${div}</h2>`;
        document.querySelector("#division-tables").appendChild(container);
        
        for (let i=0; i<teams.length; i++) {
            if (i === teams.length - 1) {
                container.innerHTML += `
                <div class="team last-team">
                    <img src="../images/${teams[i].nickname.toLowerCase()}.png">
                    <p class="team-name">${teams[i].city} ${teams[i].nickname}</p>
                    <p class="record">${teams[i].wins}-${teams[i].losses}</p>
                </div>
                `;
            } else {
                container.innerHTML += `
                <div class="team">
                    <img src="../images/${teams[i].nickname.toLowerCase()}.png">
                    <p class="team-name">${teams[i].city} ${teams[i].nickname}</p>
                    <p class="record">${teams[i].wins}-${teams[i].losses}</p>
                </div>
                `;
            }
        }
    }
    static async teamByNickname(nickname) {
        let teams = await Team.getTeams();
        return teams.find((x) => x.nickname === nickname);
    }
    static async teamIDByNickname(nickname) {
        let teams = await Team.getTeams();
        let team = teams.find((x) => x.nickname.toLowerCase() === nickname.toLowerCase());
        return team.id;
    }
    static async teamNameByID(id) {
        let teams = await Team.getTeams();
        let team = teams.find((x) => x.id === id);
        return `${team.city} ${team.nickname}`;
    }
    constructor(teamData) {
        this.id = Team.all.length + 1;
        this.city = teamData.city;
        this.nickname = teamData.nickname;
        this.conferance = teamData.conferance;
        this.division = teamData.division;
        this.wins = teamData.wins;
        this.ties = teamData.ties;
        this.losses = teamData.losses;
        this.tiebreaker = teamData.tiebreaker;
        this.mainC = teamData.mainC;
        this.secondaryC = teamData.secondaryC;
        this.constructor.all.push(this);
    }
    get getWins() {return this.wins};
    get getTies() {return this.ties};
    get getLosses() {return this.losses};

    // changeWDL(what) {
    //     if (what.toLowerCase() === "w") {
    //         this.wins++
    //     } else if (what.toLowerCase() === "d") {
    //         this.ties++
    //     } else if (what.toLowerCase() === "l") {
    //         this.losses++
    //     } else {
    //         return false;
    //     }
    // }
}

// for (let team of teams) {
//     new Team(team);
// }

// for (let player of players) {
//     new Player(player);
// }

// for (let draftee of draftees) {
//     new Draftee(draftee);
// }