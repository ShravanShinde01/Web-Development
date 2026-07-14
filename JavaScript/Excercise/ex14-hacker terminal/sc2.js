// Delay function
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Show one message
async function showMessage(text) {

    let div = document.createElement("div");
    div.className = "msgBox";
    div.textContent = text;
    document.body.appendChild(div);

    // Blinking dots
    let dots = 0;

    let blink = setInterval(() => {

        dots++;

        if (dots % 3 == 1) {
            div.textContent = text + ".";
        }
        else if (dots % 3 == 2) {
            div.textContent = text + "..";
        }
        else {
            div.textContent = text + "...";
        }

    }, 500);

    // Random delay
    let rand = Math.random();
    // console.log(rand);
    
    let time;

    if (rand < 0.3) {
        time = 3000;
    }
    else if (rand < 0.7) {
        time = 5000;
    }
    else {
        time = 7000;
    }

    await delay(time);

    clearInterval(blink);

    div.textContent = text + " ✅";
}

// Main function
async function main() {

    await showMessage("Initializing Hacking");
    await showMessage("Reading your Files");
    await showMessage("Password files Detected");
    await showMessage("Sending all passwords to Server");
    await showMessage("Cleaning up");
    await showMessage("Hack Complete");
}

main();