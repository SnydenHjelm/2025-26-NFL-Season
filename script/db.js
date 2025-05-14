const players = [
    {name: "Jordan Love", position: "Quarterback", shortPos: "QB", playsFor: "Packers"},
    {name: "Xaver McKinney", position: "Safety", shortPos: "S", playsFor: "Packers"},
    {name: "A.J. Brown", position: "Wide Receiver", shortPos: "WR", playsFor: "Eagles"},
    {name: "Nik Bonitto", position: "Linebacker", shortPos: "LB", playsFor: "Broncos"},
    {name: "Bijan Robinson", position: "Running Back", shortPos: "RB", playsFor: "Falcons"},
    {name: "Buda Baker", position: "Safety", shortPos: "S", playsFor: "Cardinals"},
    {name: "L'Jarius Sneed", position: "Cornerback", shortPos: "CB", playsFor: "Titans"},
    {name: "Cameron Heyward", position: "Defensive Tackle", shortPos: "DT", playsFor: "Steelers"},
    {name: "Brian Thomas Jr.", position: "Wide Receiver", shortPos: "WR", playsFor: "Jaguars"},
    {name: "Tyler Higbee", position: "Tight End", shortPos: "TE", playsFor: "Rams"},
];

const teams = [
    { city: "Arizona", nickname: "Cardinals", conferance: "NFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#97233F", secondaryC: "#000"},
    { city: "Atlanta", nickname: "Falcons", conferance: "NFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#A71930", secondaryC: "#000" },
    { city: "Baltimore", nickname: "Ravens", conferance: "AFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#241773", secondaryC: "#9E7C0C" },
    { city: "Buffalo", nickname: "Bills", conferance: "AFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#00338D", secondaryC: "#C60C30" },
    { city: "Carolina", nickname: "Panthers", conferance: "NFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#0085CA", secondaryC: "#101820" },
    { city: "Chicago", nickname: "Bears", conferance: "NFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#0B162A", secondaryC: "#C83803" },
    { city: "Cincinnati", nickname: "Bengals", conferance: "AFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#FB4F14", secondaryC: "#000" },
    { city: "Cleveland", nickname: "Browns", conferance: "AFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#311D00", secondaryC: "#FF3C00" },
    { city: "Dallas", nickname: "Cowboys", conferance: "NFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#041E42", secondaryC: "#869397" },
    { city: "Denver", nickname: "Broncos", conferance: "AFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#FB4F14", secondaryC: "#002244" },
    { city: "Detroit", nickname: "Lions", conferance: "NFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#0076B6", secondaryC: "#B0B7BC" },
    { city: "Green Bay", nickname: "Packers", conferance: "NFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#203731", secondaryC: "#FFB612" },
    { city: "Houston", nickname: "Texans", conferance: "AFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#03202F", secondaryC: "#A71930" },
    { city: "Indianapolis", nickname: "Colts", conferance: "AFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#002C5F", secondaryC: "#A2AAAD" },
    { city: "Jacksonville", nickname: "Jaguars", conferance: "AFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#006778", secondaryC: "#101820" },
    { city: "Kansas City", nickname: "Chiefs", conferance: "AFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#E31837", secondaryC: "#FFB81C" },
    { city: "Las Vegas", nickname: "Raiders", conferance: "AFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#000", secondaryC: "#A5ACAF" },
    { city: "Los Angeles", nickname: "Chargers", conferance: "AFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#0080C6", secondaryC: "#FFC20E" },
    { city: "Los Angeles", nickname: "Rams", conferance: "NFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#003594", secondaryC: "#FFA300"  },
    { city: "Miami", nickname: "Dolphins", conferance: "AFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#008E97", secondaryC: "#F58220" },
    { city: "Minnesota", nickname: "Vikings", conferance: "NFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#4F2683", secondaryC: "#FFC62F" },
    { city: "New England", nickname: "Patriots", conferance: "AFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#002244", secondaryC: "#C60C30" },
    { city: "New Orleans", nickname: "Saints", conferance: "NFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#D3BC8D", secondaryC: "#101820" },
    { city: "New York", nickname: "Giants", conferance: "NFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#0B2265", secondaryC: "#A71930" },
    { city: "New York", nickname: "Jets", conferance: "AFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#125740", secondaryC: "#000" },
    { city: "Philadelphia", nickname: "Eagles", conferance: "NFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#004C54", secondaryC: "#A5ACAF" },
    { city: "Pittsburgh", nickname: "Steelers", conferance: "AFC", division: "North", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#FFB612", secondaryC: "#101820" },
    { city: "San Francisco", nickname: "49ers", conferance: "NFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#AA0000", secondaryC: "#B3995D" },
    { city: "Seattle", nickname: "Seahawks", conferance: "NFC", division: "West", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#002244", secondaryC: "#69BE28" },
    { city: "Tampa Bay", nickname: "Buccaneers", conferance: "NFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#D50A0A", secondaryC: "#0A0A08" },
    { city: "Tennessee", nickname: "Titans", conferance: "AFC", division: "South", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#0C2340", secondaryC: "#4B92DB" },
    { city: "Washington", nickname: "Commanders", conferance: "NFC", division: "East", wins: 0, ties: 0, losses: 0, tiebreaker: 0, mainC: "#5A1414", secondaryC: "#FFB612" }
];

const stats = [
    [
        {stat: "pass-yds"},
        {team: "Bengals", position: "QB", name: "Joe Burrow", statCount: 4918},
        {team: "Vikings", position: "QB", name: "Sam Darnold", statCount: 4319},
        {team: "Seahawks", position: "QB", name: "Geno Smith", statCount: 4320},
        {team: "Lions", position: "QB", name: "Jared Goff", statCount: 4629},
        {team: "Buccaneers", position: "QB", name: "Baker Mayfield", statCount: 4500}
    ],
    
    [
        {stat: "pass-tds"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "pass-int"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "rush-yds"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "rush-tds"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "rec-yds"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "rec-tds"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "tfl"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "sacks"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "int"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "ff"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],

    [
        {stat: "fr"},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0},
        {team: "qm", position: "?", name: "Unknown", statCount: 0}
    ],
];