Draftee.displayDraftees();

document.querySelector("#submit").addEventListener("click", async () => {
    let obj = {
        round: parseInt(document.querySelector("#round").value),
        pick: parseInt(document.querySelector("#pick").value),
        team: document.querySelector("#team").value,
        position: document.querySelector("#position").value,
        name: document.querySelector("#name").value,
        college: document.querySelector("#college").value
    }
    let data = new Draftee(obj);
    await addDraftee(data);
    Draftee.displayDraftees();
});

async function addDraftee(data) {
    let options = {method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"}};
    const req = new Request("http://localhost:8000/draftees", options);
    let resp = await fetch(req);
    resp = await resp.text();

    if (resp === "Player added successfully") {
        document.querySelector("#round").value= "";
        document.querySelector("#pick").value = "";
        document.querySelector("#team").value = "";
        document.querySelector("#position").value = "";
        document.querySelector("#name").value = "";
        document.querySelector("#college").value = "";
        document.querySelector("#status-msg").textContent = resp;
    } else {
        document.querySelector("#status-msg").textContent = resp;
    }
}