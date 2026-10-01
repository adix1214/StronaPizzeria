const secretButton = document.getElementById("secretButton");
const secretContent = document.getElementById("secretContent");

let clicks = 0;

secretButton.addEventListener("click", () => {
    clicks++;

    if (clicks < 5) {
        secretButton.textContent = `NIE KLIKAJ (${clicks}/5)`;
        return;
    }

    secretContent.classList.remove("hidden");
    secretButton.textContent = "NO I PO CO KLIKAŁEŚ XD";

    secretContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
