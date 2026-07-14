function delay(ms){
    return new Promise(resolve => {
      setInterval (resolve,ms);

    })
}

async function showMessage(text) {

    let rand = Math.random();
    let time;

    if (rand < 0.3) {
        time = 3000;
    } else if (rand < 0.7) {
        time = 5000;
    } else {
        time = 7000;
    }

    await delay(time);

    document.body.innerHTML += `<div class="msgBox">${text}</div>`;
}


async function main() {

    await showMessage("Initializing Hacking...");
    await showMessage("Reading your Files...");
    await showMessage("Password files Detected...");
    await showMessage("Sending all passwords to server...");
    await showMessage("Cleaning up...");
    await showMessage("Done ✅");
}

main();