// fold.js
// IMPORTANT: no DOMContentLoaded, no const/let wrapping

function toggleFrame(id) {
    const frame = document.getElementById(id);
    if (!frame) return;

    // Save original height once
    if (!frame.dataset.originalHeight) {
        frame.dataset.originalHeight = frame.offsetHeight + "px";
    }

    if (frame.style.height === "10vh") {
        frame.style.height = frame.dataset.originalHeight;
    } else {
        frame.style.height = "10vh";
    }
}
