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
        { threshold: 0.7 } // Animation startet, wenn 20% sichtbar sind
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




