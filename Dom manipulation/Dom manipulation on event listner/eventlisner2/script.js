const revealBtn = document.querySelector(".reveal-btn-boxes");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
    if (hiddenContent.classList.contains("visible")) {
        hiddenContent.classList.remove("visible");
        revealBtn.textContent = "Show More";
    } else {
        hiddenContent.classList.add("visible");
        revealBtn.textContent = "Show Less";
    }
}

revealBtn.addEventListener("click", revealContent);
