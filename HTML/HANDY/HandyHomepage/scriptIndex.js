// Erstelle den IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Überprüfe, ob der Container zu mindestens 90% sichtbar ist
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            // Wenn der Container zu 90% sichtbar ist, starte die Animation der Balken
            const bars = entry.target.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                // Füge die "animate"-Klasse zu jedem Balken hinzu, um die Animation zu starten
                bar.classList.add('animate');
            });
            observer.unobserve(entry.target); // Stoppe die Beobachtung nach der ersten Aktivierung
        }
    });
}, {
    threshold: 0.6 // Der Container muss zu mindestens 90% sichtbar sein
});

// Füge den Observer für den containerD hinzu
const containerD = document.querySelector('.containerD');
observer.observe(containerD);


const girlsSection = document.querySelector('#girls');
const caro = document.querySelector('#caro');
const girlsL = document.querySelector('#girlsL');
const scaleGirl = document.querySelector('#scaleGirl');

let hasAnimated = false;

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;

      // Animierte Elemente von links
      caro.classList.add('visible');
      girlsL.classList.add('visible');

      // Warte bis caro & girlsL in der Mitte angekommen sind
      setTimeout(() => {
        scaleGirl.classList.add('visible-scale');
      }, 1000); // Delay für dramatischen Effekt
    }
  });
}, {
  threshold: 0.5 // Wenn etwa die Hälfte sichtbar ist
});

observer2.observe(girlsSection);


 const cardsContainer = document.getElementById('cardsContainer');
const cards = document.querySelectorAll('.cardD');
const dotsContainer = document.getElementById('dotsContainer');
let currentIndex = 0;

// Dots erzeugen
cards.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    moveToIndex(i);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function moveToIndex(index) {
  const cardWidth = cards[0].offsetWidth + 20; // 20px für Margin
  cardsContainer.style.transform = `translateX(-${index * cardWidth}px)`;
  updateDots(index);
  currentIndex = index;
}

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}
