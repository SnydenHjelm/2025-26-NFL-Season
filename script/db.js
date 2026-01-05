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
        {team: "Cowboys", position: "QB", name: "Dak Prescott", statCount: 4552},
        {team: "lions", position: "QB", name: "Jared Goff", statCount: 4564},
        {team: "rams", position: "QB", name: "Matthew Stafford", statCount: 4707},
        {team: "seahawks", position: "QB", name: "Sam Darnold", statCount: 4048},
        {team: "patriots", position: "QB", name: "Drake Maye", statCount: 4394}
    ],
    
    [
        {stat: "pass-tds"},
        {team: "Lions", position: "QB", name: "Jared Goff", statCount: 34},
        {team: "rams", position: "QB", name: "Matthew Stafford", statCount: 46},
        {team: "patriots", position: "QB", name: "Drake Maye", statCount: 31},
        {team: "cowboys", position: "QB", name: "Dak Prescott", statCount: 30},
        {team: "jaguars", position: "QB", name: "Trevor Lawrence", statCount: 29}
    ],

    [
        {stat: "pass-int"},
        {team: "raiders", position: "QB", name: "Geno Smith", statCount: 17},
        {team: "dolphins", position: "QB", name: "Tua Tagovailoa", statCount: 15},
        {team: "seahawks", position: "QB", name: "Sam Darnold", statCount: 14},
        {team: "chargers", position: "QB", name: "Justin Herbert", statCount: 13},
        {team: "jaguars", position: "QB", name: "Trevor Lawrence", statCount: 12}
    ],

    [
        {stat: "rush-yds"},
        {team: "colts", position: "RB", name: "Jonathan Taylor", statCount: 1585},
        {team: "bills", position: "RB", name: "James Cook", statCount: 1621},
        {team: "falcons", position: "RB", name: "Bijan Robinson", statCount: 1478},
        {team: "ravens", position: "RB", name: "Derrick Henry", statCount: 1595},
        {team: "dolphins", position: "RB", name: "De'Von Achane", statCount: 1350}
    ],

    [
        {stat: "rush-tds"},
        {team: "colts", position: "RB", name: "Jonathan Taylor", statCount: 18},
        {team: "packers", position: "RB", name: "Josh Jacobs", statCount: 13},
        {team: "ravens", position: "RB", name: "Derrick Henry", statCount: 16},
        {team: "bills", position: "QB", name: "Josh Allen", statCount: 14},
        {team: "lions", position: "RB", name: "Jahmyr Gibbs", statCount: 13}
    ],

    [
        {stat: "rec-yds"},
        {team: "seahawks", position: "WR", name: "Jaxson Smith-Njigba", statCount: 1793},
        {team: "bengals", position: "WR", name: "Ja'Marr Chase", statCount: 1412},
        {team: "cowboys", position: "WR", name: "George Pickens", statCount: 1429},
        {team: "rams", position: "WR", name: "Puka Nacua", statCount: 1715},
        {team: "lions", position: "WR", name: "Amon-Ra St. Brown", statCount: 1401}
    ],

    [
        {stat: "rec-tds"},
        {team: "eagles", position: "TE", name: "Dallas Goedert", statCount: 11},
        {team: "lions", position: "WR", name: "Amon-Ra St. Brown", statCount: 11},
        {team: "rams", position: "WR", name: "Davante Adams", statCount: 14},
        {team: "bengals", position: "WR", name: "Tee Higgins", statCount: 11},
        {team: "cardinals", position: "TE", name: "Trey McBride", statCount: 11}
    ],

    [
        {stat: "tfl"},
        {team: "browns", position: "DE", name: "Myles Garrett", statCount: 33},
        {team: "giants", position: "LB", name: "Brian Burns", statCount: 22},
        {team: "raiders", position: "DE", name: "Maxx Crosby", statCount: 28},
        {team: "texans", position: "DE", name: "Will Anderson Jr.", statCount: 20},
        {team: "chargers", position: "LB", name: "Tuli Tuipulotu", statCount: 20}
    ],

    [
        {stat: "sacks"},
        {team: "giants", position: "LB", name: "Brian Burns", statCount: 16.5},
        {team: "browns", position: "DE", name: "Myles Garrett", statCount: 23},
        {team: "texans", position: "DE", name: "Danielle Hunter", statCount: 15},
        {team: "broncos", position: "LB", name: "Nik Bonitto", statCount: 14},
        {team: "lions", position: "DE", name: "Aidan Hutchinson", statCount: 14.5}
    ],

    [
        {stat: "int"},
        {team: "bears", position: "S", name: "Kevin Byard", statCount: 7},
        {team: "falcons", position: "S", name: "Xavier Watts", statCount: 5},
        {team: "seahawks", position: "LB", name: "Ernest Jones", statCount: 5},
        {team: "jaguars", position: "S", name: "Antonio Johnson", statCount: 5},
        {team: "panthers", position: "CB", name: "Jaycee Horn", statCount: 5}
    ],

    [
        {stat: "ff"},
        {team: "bills", position: "DE", name: "Joey Bosa", statCount: 5},
        {team: "lions", position: "DE", name: "Aidan Hutchinson", statCount: 4},
        {team: "rams", position: "LB", name: "Nate Landman", statCount: 4},
        {team: "chargers", position: "LB", name: "Khalil Mack", statCount: 4},
        {team: "cardinals", position: "LB", name: "Josh Sweat", statCount: 4}
    ],

    [
        {stat: "fr"},
        {team: "buccaneers", position: "LB", name: "Levonte David", statCount: 2},
        {team: "cowboys", position: "LB", name: "Jadeveon Clowney", statCount: 2},
        {team: "saints", position: "LB", name: "Pete Werner", statCount: 3},
        {team: "seahawks", position: "LB", name: "DeMarcus Lawrence", statCount: 3},
        {team: "texans", position: "DE", name: "Will Anderson Jr.", statCount: 2}
    ],
];