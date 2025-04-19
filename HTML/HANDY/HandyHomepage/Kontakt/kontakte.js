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
        { threshold: 0.4} // Animation startet, wenn 20% sichtbar sind
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
        { threshold: 0.2 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(artztContainer);
});

function showTeacherDetails(teacherId) {
    // Verstecke alle Lehrer-Details
    const details = document.querySelectorAll('.teacher-detail');
    details.forEach(detail => {
        detail.style.display = 'none';
    });

    // Zeige das ausgewählte Lehrer-Detail
    const selectedDetail = document.getElementById(teacherId);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}

// Funktion zum Schließen der Details, wenn der Hintergrund (außerhalb des Bildes) geklickt wird
function closeTeacherDetails(event) {
    // Überprüfe, ob der Klick auf den äußeren Container (den Hintergrund) erfolgt ist
    if (event.target === event.currentTarget) {
        event.currentTarget.style.display = 'none'; // Popup schließen
    }
}

// Funktion zum Verhindern der Weitergabe des Klick-Events bei inneren Elementen
function preventClose(event) {
    event.stopPropagation(); // Verhindert, dass der Klick weitergegeben wird
}



const burgerBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Menü automatisch schließen bei Link-Klick
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
