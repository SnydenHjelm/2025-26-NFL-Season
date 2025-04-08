const divs = ["North", "East", "South", "West"];

async function driver() {
    for (let div of divs) {
        await Team.displayDivision("AFC", div);
        await Team.displayDivision("NFC", div);
    }
}

driver();