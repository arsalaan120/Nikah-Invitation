const music = document.getElementById("song");

window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked by browser.");
    });
});