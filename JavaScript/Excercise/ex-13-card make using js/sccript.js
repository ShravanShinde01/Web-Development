function createCard(title, cName, views, duration, image, vidTime) {
    let title1 = document.querySelector(".pgTitle").innerHTML = (title);
    let cname = document.querySelector(".cName").innerHTML = (cName);

    let vie = Number(views);

    if (vie >= 1_000_000) {
        vie = (vie / 1_000_000).toFixed(1) + "M";
    } else if (vie >= 1_000) {
        vie = (vie / 1_000).toFixed(1) + "K";
    }

    document.querySelector(".views").innerHTML = vie;

    let dura = Number(duration);
    if (dura >= 12) {
        dura = Math.floor(dura / 12) + " year";
    } else {
        dura = dura + " months";
    }
    document.querySelector(".time").innerHTML = dura;
    //    let dura = document.querySelector(".time").innerHTML = (duration)


    let img = document.getElementById("img1").src = (image);

    let vt = Number(vidTime);

    if (vt >= 60) {
        vt = (vt / 60).toFixed(2) + " hr";
    } else {
        vt = vt + " min";
    }

    document.querySelector(".video-duration").innerHTML = vt;

}
createCard("Shravan", "lalaBhai", "142900", "111", "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg", "185");


let btn = document.createElement("button");
btn.innerHTML = "Create Card";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    createCard(
        "ravan",
        "lalaBhai",
        "142900",
        "111",
        "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
        "185"
    );
});

