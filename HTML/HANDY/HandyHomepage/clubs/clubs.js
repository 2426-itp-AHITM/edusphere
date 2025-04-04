const slides = [
    ["../img/mariar.png", "30+", "3x wöchentlich", "10:00 Uhr", "Die „Fünf Freunde“ sind ein Schulclub für Abenteuer, Teamgeist und Spaß!", "FÜNF FREUNDE"],
    ["../img/mariar.png", "40+", "2x wöchentlich", "15:00 Uhr", "Erlebe spannende Rätselabenteuer mit uns!", "VOLLEYBALL"],
    ["../img/mariar.png", "50+", "1x wöchentlich", "18:00 Uhr", "Gemeinsam entwickeln wir kreative Lösungen!", "SPORT"]
];

let currentSlide = 0;
let slideInterval = setInterval(() => changeSlide(1), 15000); // Wechselt alle 15 Sekunden zur nächsten Folie

document.getElementById("prev").onclick = () => {
    changeSlide(-1);
    resetInterval();
};
document.getElementById("next").onclick = () => {
    changeSlide(1);
    resetInterval();
};

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    document.getElementById("headerU").textContent = slides[currentSlide][5];
    document.getElementById("clubImg").src = slides[currentSlide][0];
    document.getElementById("members").textContent = slides[currentSlide][1];
    document.getElementById("meetingFrequency").textContent = slides[currentSlide][2];
    document.getElementById("meetingTime").textContent = slides[currentSlide][3];
    document.getElementById("description").textContent = slides[currentSlide][4];

    document.querySelector("main").style.backgroundImage = currentSlide === 0 
        ? "url('../img/clubs.png')" 
        : "url('../img/volleyy.png')";

    updateProgressBar();
}

function updateProgressBar() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(1), 15000);
}

updateProgressBar();
