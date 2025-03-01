const draftees = [
    { round: 1, pick: 1, team: "Bears", position: "QB", name: "Caleb Williams", college: "USC" },
    { round: 1, pick: 2, team: "Commanders", position: "QB", name: "Drake Maye", college: "North Carolina" },
    { round: 1, pick: 3, team: "Patriots", position: "QB", name: "Jayden Daniels", college: "LSU" },
    { round: 1, pick: 4, team: "Cardinals", position: "WR", name: "Marvin Harrison Jr.", college: "Ohio State" },
    { round: 1, pick: 5, team: "Chargers", position: "OT", name: "Joe Alt", college: "Notre Dame" },
    { round: 1, pick: 6, team: "Giants", position: "WR", name: "Malik Nabers", college: "LSU" },
    { round: 1, pick: 7, team: "Titans", position: "OT", name: "Olumuyiwa Fashanu", college: "Penn State" },
    { round: 1, pick: 8, team: "Falcons", position: "EDGE", name: "Dallas Turner", college: "Alabama" },
    { round: 1, pick: 9, team: "Bears", position: "WR", name: "Rome Odunze", college: "Washington" },
    { round: 1, pick: 10, team: "Jets", position: "OT", name: "Taliese Fuaga", college: "Oregon State" },
    { round: 1, pick: 11, team: "Vikings", position: "QB", name: "J.J. McCarthy", college: "Michigan" },
    { round: 1, pick: 12, team: "Broncos", position: "CB", name: "Quinyon Mitchell", college: "Toledo" },
    { round: 1, pick: 13, team: "Raiders", position: "QB", name: "Michael Penix Jr.", college: "Washington" },
    { round: 1, pick: 14, team: "Saints", position: "OT", name: "J.C. Latham", college: "Alabama" },
    { round: 1, pick: 15, team: "Colts", position: "CB", name: "Terrion Arnold", college: "Alabama" },
    { round: 1, pick: 16, team: "Seahawks", position: "EDGE", name: "Jared Verse", college: "Florida State" },
    { round: 1, pick: 17, team: "Jaguars", position: "CB", name: "Nate Wiggins", college: "Clemson" },
    { round: 1, pick: 18, team: "Bengals", position: "TE", name: "Brock Bowers", college: "Georgia" },
    { round: 1, pick: 19, team: "Rams", position: "EDGE", name: "Laiatu Latu", college: "UCLA" },
    { round: 1, pick: 20, team: "Steelers", position: "OT", name: "Amarius Mims", college: "Georgia" },
    { round: 1, pick: 21, team: "Dolphins", position: "WR", name: "Brian Thomas Jr.", college: "LSU" },
    { round: 1, pick: 22, team: "Eagles", position: "CB", name: "Cooper DeJean", college: "Iowa" },
    { round: 1, pick: 23, team: "Texans", position: "DT", name: "Byron Murphy II", college: "Texas" },
    { round: 1, pick: 24, team: "Cowboys", position: "IOL", name: "Graham Barton", college: "Duke" },
    { round: 1, pick: 25, team: "Packers", position: "S", name: "Kamren Kinchens", college: "Miami (FL)" },
    { round: 1, pick: 26, team: "Buccaneers", position: "EDGE", name: "Darius Robinson", college: "Missouri" },
    { round: 1, pick: 27, team: "Cardinals", position: "CB", name: "Kool-Aid McKinstry", college: "Alabama" },
    { round: 1, pick: 28, team: "Bills", position: "WR", name: "Xavier Worthy", college: "Texas" },
    { round: 1, pick: 29, team: "Lions", position: "CB", name: "Ennis Rakestraw Jr.", college: "Missouri" },
    { round: 1, pick: 30, team: "Ravens", position: "OT", name: "Tyler Guyton", college: "Oklahoma" },
    { round: 1, pick: 31, team: "49ers", position: "OT", name: "Jordan Morgan", college: "Arizona" },
    { round: 1, pick: 32, team: "Chiefs", position: "WR", name: "Adonai Mitchell", college: "Texas" },
    { round: 2, pick: 1, team: "Bears", position: "QB", name: "Caleb Williams", college: "USC" },
    { round: 2, pick: 2, team: "Commanders", position: "QB", name: "Drake Maye", college: "North Carolina" },
    { round: 2, pick: 3, team: "Patriots", position: "QB", name: "Jayden Daniels", college: "LSU" },
    { round: 2, pick: 4, team: "Cardinals", position: "WR", name: "Marvin Harrison Jr.", college: "Ohio State" },
    { round: 2, pick: 5, team: "Chargers", position: "OT", name: "Joe Alt", college: "Notre Dame" },
    { round: 2, pick: 6, team: "Giants", position: "WR", name: "Malik Nabers", college: "LSU" },
    { round: 2, pick: 7, team: "Titans", position: "OT", name: "Olumuyiwa Fashanu", college: "Penn State" },
    { round: 2, pick: 8, team: "Falcons", position: "EDGE", name: "Dallas Turner", college: "Alabama" },
    { round: 2, pick: 9, team: "Bears", position: "WR", name: "Rome Odunze", college: "Washington" },
    { round: 2, pick: 10, team: "Jets", position: "OT", name: "Taliese Fuaga", college: "Oregon State" },
    { round: 2, pick: 11, team: "Vikings", position: "QB", name: "J.J. McCarthy", college: "Michigan" },
    { round: 2, pick: 12, team: "Broncos", position: "CB", name: "Quinyon Mitchell", college: "Toledo" },
    { round: 2, pick: 13, team: "Raiders", position: "QB", name: "Michael Penix Jr.", college: "Washington" },
    { round: 2, pick: 14, team: "Saints", position: "OT", name: "J.C. Latham", college: "Alabama" },
    { round: 2, pick: 15, team: "Colts", position: "CB", name: "Terrion Arnold", college: "Alabama" },
    { round: 2, pick: 16, team: "Seahawks", position: "EDGE", name: "Jared Verse", college: "Florida State" },
    { round: 2, pick: 17, team: "Jaguars", position: "CB", name: "Nate Wiggins", college: "Clemson" },
    { round: 2, pick: 18, team: "Bengals", position: "TE", name: "Brock Bowers", college: "Georgia" },
    { round: 2, pick: 19, team: "Rams", position: "EDGE", name: "Laiatu Latu", college: "UCLA" },
    { round: 2, pick: 20, team: "Steelers", position: "OT", name: "Amarius Mims", college: "Georgia" },
    { round: 2, pick: 21, team: "Dolphins", position: "WR", name: "Brian Thomas Jr.", college: "LSU" },
    { round: 2, pick: 22, team: "Eagles", position: "CB", name: "Cooper DeJean", college: "Iowa" },
    { round: 2, pick: 23, team: "Texans", position: "DT", name: "Byron Murphy II", college: "Texas" },
    { round: 2, pick: 24, team: "Cowboys", position: "IOL", name: "Graham Barton", college: "Duke" },
    { round: 2, pick: 25, team: "Packers", position: "S", name: "Kamren Kinchens", college: "Miami (FL)" },
    { round: 2, pick: 26, team: "Buccaneers", position: "EDGE", name: "Darius Robinson", college: "Missouri" },
    { round: 2, pick: 27, team: "Cardinals", position: "CB", name: "Kool-Aid McKinstry", college: "Alabama" },
    { round: 2, pick: 28, team: "Bills", position: "WR", name: "Xavier Worthy", college: "Texas" },
    { round: 2, pick: 29, team: "Lions", position: "CB", name: "Ennis Rakestraw Jr.", college: "Missouri" },
    { round: 2, pick: 30, team: "Ravens", position: "OT", name: "Tyler Guyton", college: "Oklahoma" },
    { round: 2, pick: 31, team: "49ers", position: "OT", name: "Jordan Morgan", college: "Arizona" },
    { round: 2, pick: 32, team: "Chiefs", position: "WR", name: "Adonai Mitchell", college: "Texas" },
];

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