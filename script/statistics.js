function displayStatistics(data) {
    

    for (let item of data) {
        item = item.sort((a, b) => b.statCount - a.statCount);
        let rank = 1;
        let statName = fullStatName(item[0].stat);
        let parent = document.querySelector(`#${item[0].stat}`);
        parent.innerHTML = `<h2 class="category">${statName}</h2>`;

        for (let j=1; j<item.length; j++) {
            if (j === item.length - 1) {
                parent.innerHTML += `
                <div class="player last-player">
                <p>${rank}.</p>
                <img src="../images/${item[j].team.toLowerCase()}.png">
                <p>${item[j].position}</p>
                <p class="player-name">${item[j].name}</p>
                <p>${item[j].statCount}</p>
                </div>
                `
            } else {
                parent.innerHTML += `
                <div class="player">
                <p>${rank}.</p>
                <img src="../images/${item[j].team.toLowerCase()}.png">
                <p>${item[j].position}</p>
                <p class="player-name">${item[j].name}</p>
                <p>${item[j].statCount}</p>
                </div>
                `
            }
            rank++;
        }
    }
}

function fullStatName(stat) {
    if (stat === "pass-yds") {return "Passing Yards"}
    else if (stat === "pass-tds") {return "Passing Touchdowns"}
    else if (stat === "pass-int") {return "Passing Interceptions"}
    else if (stat === "rush-yds") {return "Rushing Yards"}
    else if (stat === "rush-tds") {return "Rushing Touchdowns"}
    else if (stat === "rec-yds") {return "Receiving Yards"}
    else if (stat === "rec-tds") {return "Receiving Touchdowns"}
    else if (stat === "tfl") {return "Tackles for Loss"}
    else if (stat === "sacks") {return "Sacks"}
    else if (stat === "int") {return "Interceptions"}
    else if (stat === "ff") {return "Forced Fumbles"}
    else if (stat === "fr") {return "Fumbles Recovered"}
    else {return false};
}

displayStatistics(stats);