document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-container');

    function moveCardToBack() {
        const parent = this.parentNode;

        // Füge die Animationsklasse hinzu
        this.classList.add('project-container--out');

        // Warte, bis die Animation abgeschlossen ist, dann verschiebe die Karte nach hinten
        setTimeout(() => {
            this.classList.remove('project-container--out');
            parent.appendChild(this);

            // Aktualisiere den z-index jeder Karte
            let allCards = parent.querySelectorAll('.project-container');
            allCards.forEach((card, index) => {
                card.style.zIndex = allCards.length - index; // Der höchste z-index geht an die oberste Karte
            });
        }, 600); // Die Animation dauert 0.6s
    }

    // Füge für jede Karte ein Click-Event hinzu
    cards.forEach(card => {
        card.addEventListener('click', moveCardToBack);
    });
});
function handleScroll() {
    const section = document.getElementById("animationSection");
    const phone = document.getElementById("phone");
    const socialIcons = document.getElementById("socialIcons");
    const flyer = document.getElementById("flyer");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight * 0.7) {
        phone.classList.add("visible");
        socialIcons.classList.add("visible");
        flyer.classList.add("visible");
    }
}

window.addEventListener("scroll", handleScroll);

function handleScroll2() {
    let container2 = document.querySelector('.container2');
    let rect = container2.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.6) {
        container2.classList.add('visible');
    }
}

document.addEventListener('scroll', handleScroll2);
document.addEventListener('DOMContentLoaded', handleScroll2);

// Funktion, die die Animation startet, wenn das Element sichtbar wird
function startAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Wenn das Element sichtbar wird, füge die Animation hinzu
        entry.target.style.animation = 'slide-right 2s forwards';
        entry.target.style.opacity = '1'; // Setzt die Sichtbarkeit
        observer.unobserve(entry.target); // Stoppt die Beobachtung nach der ersten Ausführung
      }
    });
  }
  
  // Optionen für den Intersection Observer
  const options = {
    root: null, // Beobachtet den gesamten Viewport
    threshold: 0.5 // Element muss zu mindestens 50% sichtbar sein
  };
  
  // Erstelle den Observer
  const observer = new IntersectionObserver(startAnimation, options);
  
  // Beobachte das Element
  const elementToObserve = document.querySelector('#im2');
  observer.observe(elementToObserve);
  