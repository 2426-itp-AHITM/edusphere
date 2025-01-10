const slider = document.getElementById("slider");
let currentIndex = 0;

// 7 Bilder im JavaScript als Array
const images = [
    "../img/image1.png",
    "../img/image2.png",
    "../img/image3.png",
    "../img/image4.png",
    "../img/image5.png",
    "../img/image6.png",
    "../img/image7.png",
];

// Bilder in den Slider einfügen
images.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;  // Hier die Bilddateien anpassen
    slider.appendChild(img);
});

// Funktion zum Wechseln des Bildes mit zirkulierendem Effekt
function changeSlide(direction) {
    // Wenn nach links, verschiebe das erste Bild ans Ende
    if (direction === -1) {
        const firstImage = slider.firstElementChild;
        slider.appendChild(firstImage);  // Das erste Bild ans Ende verschieben
    }

    // Wenn nach rechts, verschiebe das letzte Bild an den Anfang
    if (direction === 1) {
        const lastImage = slider.lastElementChild;
        slider.insertBefore(lastImage, slider.firstElementChild);  // Das letzte Bild nach vorne verschieben
    }

    // Animation für den zirkulierenden Effekt
    slider.style.transition = 'none';  // Übergangszeit ausschalten
    slider.style.transform = `translateX(0)`;  // Sofort zum Start zurücksetzen





    // Kurze Zeit warten, um die Änderung sichtbar zu machen
    setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';  // Übergang wieder aktivieren
        slider.style.transform = `translateX(-${100 * currentIndex}%)`;  // Zeige den Slider korrekt an
    }, 50);  // Timeout für die Verzögerung, um den zirkulierenden Effekt klar zu sehen
}
changeSlide(0);


function switchImg(element, slide) {
    let imageDisplay = document.getElementById("imageDisplay");
    element.style.backgroundColor = "white";
    element.style.color = "black";


    // Optional: Stile von anderen Schaltflächen zurücksetzen
    const buttons = document.querySelectorAll(".switchbutton");
    buttons.forEach(button => {
        if (button !== element) {
            button.style.backgroundColor = "#282B30";
            button.style.color = "#5F6265";

        }
    });

    if (slide == 1) {
        imageDisplay.src = "../img/stundentafel.png"
    }
    else {
        imageDisplay.src = "../img/stundenplan.png";
    }
}



