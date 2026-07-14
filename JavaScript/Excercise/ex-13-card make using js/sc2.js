function createCard(title, cName, views, duration, image, vidTime) {

    // Format views
    views = Number(views);

    if (views >= 1_000_000) {
        views = (views / 1_000_000).toFixed(1) + "M";
    } else if (views >= 1_000) {
        views = (views / 1_000).toFixed(1) + "K";
    }

    // Format duration
    duration = Number(duration);

    if (duration >= 12) {
        duration = Math.floor(duration / 12) + " year";
    } else {
        duration = duration + " months";
    }

    // Format video time
    vidTime = Number(vidTime);

    if (vidTime >= 60) {
        vidTime = (vidTime / 60).toFixed(1) + " hr";
    } else {
        vidTime = vidTime + " min";
    }

    let container = document.createElement("div");
    container.className = "container";

    container.innerHTML = `
        <div class="card">
            <div class="image">
                <img src="${image}">
                <span class="video-duration">${vidTime}</span>
            </div>

            <div class="info">
                <div class="pgTitle">${title}</div>

                <div class="info2">
                    <div class="cName">${cName}</div>
                    <div class="views">${views}</div>
                    <div class="time">${duration}</div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(container);
}

let btn = document.createElement("button");
btn.innerHTML = "Create Card";

document.body.appendChild(btn);

btn.addEventListener("click", function () {
    createCard(
        "Introduction title of video",
        "Karamati coder",
        "142900",
        "111",
        "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
        "185"
    );
});