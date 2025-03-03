document.addEventListener("DOMContentLoaded", function () {
    const info = document.querySelector("#info");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    info.classList.add("slide-in-left");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.1} // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(info);
});



document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".infoBoxes2");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    box.classList.add("slide-in-right");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.1 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(box);
});

document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".infoBoxes2:nth-child(2)");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    box.classList.add("slide-in-right");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.7 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(box);
});





document.addEventListener("DOMContentLoaded", function () {
    const artzt = document.querySelector("#artztimg");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    artzt.classList.add("puff-in-center");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.7 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(artzt);
});

document.addEventListener("DOMContentLoaded", function () {
    const artztContainer = document.querySelector("#artztContainer");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    artztContainer.classList.add("puff-in-center");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.9 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(artztContainer);
});



function duplicateLehrer(count) {
    const container = document.getElementById("container4");
    const original = document.querySelector(".lehrer");

    for (let i = 1; i < count; i++) {
        const clone = original.cloneNode(true); // Klont das Element mit Inhalt
        container.appendChild(clone); // Fügt das Klon-Element in den Container ein
    }
}

// Funktion aufrufen, um 100 Lehrer anzuzeigen
duplicateLehrer(98);


const overlayBg = document.getElementById("overlay-bg");

document.querySelectorAll(".lehrer").forEach(lehrer => {
    lehrer.addEventListener("click", function () {
        // Falls schon ein anderes Element vergrößert ist, zurücksetzen
        document.querySelectorAll(".lehrer").forEach(el => {
            el.classList.remove("expanded");
        });

        // Aktuelles Element vergrößern
        this.classList.add("expanded");
        overlayBg.style.display = "flex";
    });
});

// Close-X hinzufügen
document.querySelectorAll(".lehrer").forEach(lehrer => {
    const closeButton = document.createElement("div");
    closeButton.textContent = "X";
    closeButton.classList.add("close-btn");

    closeButton.addEventListener("click", function (event) {
        // Verhindert das Schließen beim Klicken auf den X-Button selbst
        event.stopPropagation();

        // Schließt das vergrößerte Lehrer-Element
        lehrer.classList.remove("expanded");
        overlayBg.style.display = "none";
    });

    // Close-X Button zum vergrößerten Element hinzufügen
    lehrer.appendChild(closeButton);
});