const slides = [
    ["../img/mariar.png", "30+", "3x wöchentlich", "10:00 Uhr", "Die „Fünf Freunde“ sind ein Schulclub für Abenteuer, Teamgeist und Spaß!","FÜNF FREUNDE"] ,
    ["../img/mariar.png", "40+", "2x wöchentlich", "15:00 Uhr", "Erlebe spannende Rätselabenteuer mit uns!", "VOLLEYBALL"],
    ["../img/mariar.png", "50+", "1x wöchentlich", "18:00 Uhr", "Gemeinsam entwickeln wir kreative Lösungen!", "SPORT"]
];

let currentSlide = 0;

document.getElementById("prev").onclick = () => changeSlide(-1);
document.getElementById("next").onclick = () => changeSlide(1);

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Aktualisiere den Header und andere Inhalte
    document.getElementById("headerU").textContent = slides[currentSlide][5];
    document.getElementById("clubImg").src = slides[currentSlide][0];
    document.getElementById("members").textContent = slides[currentSlide][1];
    document.getElementById("meetingFrequency").textContent = slides[currentSlide][2];
    document.getElementById("meetingTime").textContent = slides[currentSlide][3];
    document.getElementById("description").textContent = slides[currentSlide][4];
    if(currentSlide==0){
        document.querySelector("main").style.backgroundImage="url('../img/clubs.png')"

    }
    else{
        document.querySelector("main").style.backgroundImage="url('../img/volleyy.png')"
    }
    // Aktualisiere die Punkteleiste
    updateProgressBar();
}

function updateProgressBar() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// Initialisiere die Punkteleiste
updateProgressBar();
