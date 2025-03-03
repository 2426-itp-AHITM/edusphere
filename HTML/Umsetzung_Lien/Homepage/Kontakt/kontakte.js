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

document.addEventListener("DOMContentLoaded", function () {
    const overlayBg = document.getElementById("overlay-bg");
    const overlayImg = overlayBg.querySelector("img");
    const overlayName = overlayBg.querySelector("h2");
    const closeOverlay = document.getElementById("close-overlay");

    document.querySelectorAll(".lehrer").forEach(lehrer => {
        lehrer.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            const name = this.querySelector("h2").textContent;

            overlayImg.src = imgSrc;  // Setzt das Bild im Overlay
            overlayName.textContent = name;  // Setzt den Namen im Overlay

            overlayBg.style.display = "flex"; // Overlay anzeigen
        });
    });

    // Schließen des Overlays bei Klick auf "X"
    closeOverlay.addEventListener("click", function () {
        overlayBg.style.display = "none";
    });
});
