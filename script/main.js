class Draftee {
    static all = [];
    static byCollege(college) {
        return Draftee.all.filter((x) => x.college === college);
    }
    static byRound(round) {
        return Draftee.all.filter((x) => x.round === round);
    }
    static displayDraftees() {
        let blueOrRed = 1;

        for (let draftee of Draftee.all) {
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
    constructor(drafteeData) {
        this.round = drafteeData.round;
        this.pick = drafteeData.pick;
        this.team = drafteeData.team;
        this.position = drafteeData.position;
        this.name = drafteeData.name;
        this.college = drafteeData.college;
        this.constructor.all.push(this);
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
    static all = [];
    static byConferance(conf) {
        return Team.all.filter((x) => x.conferance === conf.toUpperCase());
    }
    static byDivision(conf, div) {
        return Team.all.filter((x) => x.conferance === conf.toUpperCase() && x.division.toLowerCase() === div.toLowerCase());
    }
    static displayDivision(conf, div) {
        let teams = Team.byDivision(conf, div);
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
    static teamByNickname(nickname) {
        return Team.all.find((x) => x.nickname === nickname);
    }
    static teamIDByNickname(nickname) {
        let team = Team.all.find((x) => x.nickname.toLowerCase() === nickname.toLowerCase());
        return team.id;
    }
    static teamNameByID(id) {
        let team = Team.all.find((x) => x.id === id);
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

const draftBoard = document.querySelector("#draft-board");

for (let team of teams) {
    new Team(team);
}

for (let player of players) {
    new Player(player);
}

for (let draftee of draftees) {
    new Draftee(draftee);
}