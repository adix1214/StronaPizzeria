const secretButton = document.getElementById("secretButton");
const secretContent = document.getElementById("secretContent");

let clicks = 0;

secretButton.addEventListener("click", () => {
    clicks++;

    if (clicks < 5) {
        secretButton.textContent = `NIE KLIKAJ (${clicks}/5)`;

        // Małe "odbicie" przy każdym kliknięciu
        secretButton.classList.remove("button-shake");

        void secretButton.offsetWidth;

        secretButton.classList.add("button-shake");

        return;
    }

    // Ostatnie kliknięcie
    secretButton.textContent = "NO I PO CO KLIKAŁEŚ XD";
    secretButton.classList.add("unlocked");

    // Pokazujemy tajną sekcję
    secretContent.classList.remove("hidden");

    // Delikatne opóźnienie, żeby animacja była czytelna
    setTimeout(() => {
        secretContent.classList.add("revealed");

        secretContent.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 150);

    // Nie pozwalamy klikać dalej
    secretButton.disabled = true;
});


/* =================================
   SCROLL REVEAL
================================= */

const animatedElements = document.querySelectorAll(
    ".story-section .content > *"
);

animatedElements.forEach((element, index) => {
    element.classList.add("scroll-reveal");

    element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 35, 280)}ms`
    );
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    }
);


document
    .querySelectorAll(".scroll-reveal")
    .forEach((element) => {
        revealObserver.observe(element);
    });


/* =================================
   KARTY OSÓB
================================= */

const personCards = document.querySelectorAll(".person-card");

personCards.forEach((card) => {
    card.classList.add("person-reveal");
    revealObserver.observe(card);
});
/* =================================
   UKRYTY WŁOSKI EASTER EGG
================================= */

const finalDivider = document.querySelector(".final-divider");

if (finalDivider) {

    let secretTaps = 0;

    finalDivider.addEventListener("click", () => {

        secretTaps++;

        if (secretTaps === 3) {

            finalDivider.classList.add("pizza-secret");

            setTimeout(() => {
                alert("🍕 DO PIECA!!! 🔥");
            }, 250);

            secretTaps = 0;
        }

    });

}
