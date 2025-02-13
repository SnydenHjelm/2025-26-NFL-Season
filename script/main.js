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
    static teamIDByNickname(nickname) {
        let team = Team.all.find((x) => x.nickname.toLowerCase() === nickname.toLowerCase());
        return team.id;
    }
    static teamNameByID(id) {
        let team = Team.all.find((x) => x.id === id);
        return `${team.city} ${team.nickname}`;
    }
    static byConferance(conf) {
        return Team.all.filter((x) => x.conferance === conf.toUpperCase());
    }
    static byDivision(conf, div) {
        return Team.all.filter((x) => x.conferance === conf.toUpperCase() && x.division.toLowerCase() === div.toLowerCase());
    }
    constructor(teamData) {
        this.id = Team.all.length + 1;
        this.city = teamData.city;
        this.nickname = teamData.nickname;
        this.conferance = teamData.conferance;
        this.division = teamData.division;
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.tiebreaker = 0;
        this.mainC = teamData.mainC;
        this.secondaryC = teamData.secondaryC;
        this.constructor.all.push(this);
    }
    get getWins() {return this.wins};
    get getTies() {return this.ties};
    get getLosses() {return this.losses};

    changeWDL(what) {
        if (what.toLowerCase() === "w") {
            this.wins++
        } else if (what.toLowerCase() === "d") {
            this.ties++
        } else if (what.toLowerCase() === "l") {
            this.losses++
        } else {
            return false;
        }
    }
}

for (let team of teams) {
    new Team(team);
}

for (let player of players) {
    new Player(player);
}