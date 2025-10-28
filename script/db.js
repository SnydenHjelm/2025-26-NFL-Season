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
        {team: "Cowboys", position: "QB", name: "Dak Prescott", statCount: 2069},
        {team: "Chargers", position: "QB", name: "Justin Herbert", statCount: 2140},
        {team: "Chiefs", position: "QB", name: "Patrick Mahomes", statCount: 2099},
        {team: "Colts", position: "QB", name: "Daniel Jones", statCount: 2062},
        {team: "patriots", position: "QB", name: "Drake Maye", statCount: 2026}
    ],
    
    [
        {stat: "pass-tds"},
        {team: "Chiefs", position: "QB", name: "Patrick Mahomes", statCount: 17},
        {team: "rams", position: "QB", name: "Matthew Stafford", statCount: 17},
        {team: "chargers", position: "QB", name: "Justin Herbert", statCount: 16},
        {team: "cowboys", position: "QB", name: "Dak Prescott", statCount: 16},
        {team: "steelers", position: "QB", name: "Aaron Rodgers", statCount: 16}
    ],

    [
        {stat: "pass-int"},
        {team: "raiders", position: "QB", name: "Geno Smith", statCount: 10},
        {team: "dolphins", position: "QB", name: "Tua Tagovailoa", statCount: 10},
        {team: "bengals", position: "QB", name: "Jake Browning", statCount: 8},
        {team: "chargers", position: "QB", name: "Justin Herbert", statCount: 7},
        {team: "bengals", position: "QB", name: "Joe Flacco", statCount: 6}
    ],

    [
        {stat: "rush-yds"},
        {team: "colts", position: "RB", name: "Jonathan Taylor", statCount: 850},
        {team: "bills", position: "RB", name: "James Cook", statCount: 753},
        {team: "broncos", position: "RB", name: "J.K. Dobbins", statCount: 634},
        {team: "cowboys", position: "RB", name: "Javonte Williams", statCount: 633},
        {team: "panthers", position: "RB", name: "Rico Dowdle", statCount: 605}
    ],

    [
        {stat: "rush-tds"},
        {team: "colts", position: "RB", name: "Jonathan Taylor", statCount: 12},
        {team: "packers", position: "RB", name: "Josh Jacobs", statCount: 9},
        {team: "cowboys", position: "RB", name: "Javonte Williams", statCount: 8},
        {team: "bills", position: "RB", name: "James Cook", statCount: 7},
        {team: "lions", position: "RB", name: "Jahmyr Gibbs", statCount: 6}
    ],

    [
        {stat: "rec-yds"},
        {team: "seahawks", position: "WR", name: "Jaxson Smith-Njigba", statCount: 819},
        {team: "bengals", position: "WR", name: "Ja'Marr Chase", statCount: 720},
        {team: "cowboys", position: "WR", name: "George Pickens", statCount: 685},
        {team: "rams", position: "WR", name: "Puka Nacua", statCount: 616},
        {team: "vikings", position: "WR", name: "Justin Jefferson", statCount: 602}
    ],

    [
        {stat: "rec-tds"},
        {team: "eagles", position: "TE", name: "Dallas Goedert", statCount: 7},
        {team: "lions", position: "WR", name: "Amon-Ra St. Brown", statCount: 7},
        {team: "rams", position: "WR", name: "Davante Adams", statCount: 6},
        {team: "cowboys", position: "TE", name: "Jake Ferguson", statCount: 6},
        {team: "packers", position: "TE", name: "Tucker Kraft", statCount: 6}
    ],

    [
        {stat: "tfl"},
        {team: "browns", position: "DE", name: "Myles Garrett", statCount: 15},
        {team: "giants", position: "LB", name: "Brian Burns", statCount: 13},
        {team: "raiders", position: "DE", name: "Maxx Crosby", statCount: 10},
        {team: "vikings", position: "LB", name: "Jonathan Greenard", statCount: 9},
        {team: "chargers", position: "LB", name: "Tuli Tuipulotu", statCount: 9}
    ],

    [
        {stat: "sacks"},
        {team: "giants", position: "LB", name: "Brian Burns", statCount: 10},
        {team: "browns", position: "DE", name: "Myles Garrett", statCount: 10},
        {team: "rams", position: "LB", name: "Byron Young", statCount: 9},
        {team: "broncos", position: "LB", name: "Nik Bonitto", statCount: 8},
        {team: "packers", position: "DE", name: "Rashan Gary", statCount: 7.5}
    ],

    [
        {stat: "int"},
        {team: "bears", position: "S", name: "Kevin Byard", statCount: 4},
        {team: "Jaguars", position: "LB", name: "Devin Lloyd", statCount: 4},
        {team: "buccaneers", position: "CB", name: "Jamel Dean", statCount: 3},
        {team: "bears", position: "LB", name: "Tremaine Edmunds", statCount: 3},
        {team: "panthers", position: "CB", name: "Jaycee Horn", statCount: 3}
    ],

    [
        {stat: "ff"},
        {team: "bills", position: "DE", name: "Joey Bosa", statCount: 4},
        {team: "lions", position: "DE", name: "Aidan Hutchinson", statCount: 4},
        {team: "rams", position: "LB", name: "Jared Verse", statCount: 3},
        {team: "jets", position: "DT", name: "Quinnen Williams", statCount: 3},
        {team: "saints", position: "LB", name: "Demario Davis", statCount: 2}
    ],

    [
        {stat: "fr"},
        {team: "bills", position: "LB", name: "Terrel Bernard", statCount: 2},
        {team: "49ers", position: "DT", name: "Alfred Collins", statCount: 2},
        {team: "rams", position: "LB", name: "Nate Landman", statCount: 2},
        {team: "colts", position: "DT", name: "Adetominwa Adebawore", statCount: 1},
        {team: "texans", position: "DE", name: "Will Anderson Jr.", statCount: 1}
    ],
];