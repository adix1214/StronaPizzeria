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


/* =================================
   ANIMACJE PRZY SCROLLU
================================= */

const animatedElements = document.querySelectorAll(
    ".story-section .content > *"
);

animatedElements.forEach((element, index) => {
    element.classList.add("scroll-reveal");

    // Delikatne opóźnienie kolejnych elementów
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
