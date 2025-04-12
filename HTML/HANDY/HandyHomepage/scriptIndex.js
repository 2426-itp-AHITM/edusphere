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




/* gallerie */

const galerie = document.getElementById('galerie');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

count = 0
function slide() {
    const items = document.querySelectorAll('.galerie-item');
    const textItems = document.querySelectorAll('.galerie-text');


    if (count == 4) {
        count = 0
    }
    count++

    for (i = 0; i < items.length; i++) {
        if (i == count - 1) {
            items[i].style.flex = 4
            textItems[i].style.opacity = '1';

            if (count == 1) {
                items[3].style.flex = 1
                items[2].style.flex = 2
                items[1].style.flex = 2.7
            } else if (count == 2) {
                items[2].style.flex = 2.7
                items[3].style.flex = 2
                items[0].style.flex = 1
            }
            else if (count == 3) {
                items[1].style.flex = 2
                items[3].style.flex = 2.7
                items[0].style.flex = 1
            }
            else if (count == 4) {
                items[1].style.flex = 2
                items[2].style.flex = 2.7
                items[0].style.flex = 1
            }
            for (let j = 0; j < textItems.length; j++) {
                if (j !== i) {
                    textItems[j].style.opacity = '0';  // Text für andere Elemente unsichtbar machen
                }
            }
        }
    }


}

function slideback() {
    if (count == 0) {
        count = 4;
    }
    count--;

    const items = document.querySelectorAll('.galerie-item');
    const textItems = document.querySelectorAll('.galerie-text');

    for (let i = 0; i < items.length; i++) {

        if (i == count) {
            items[i].style.flex = '4';
            textItems[i].style.opacity = '1';

            for (let j = 0; j < textItems.length; j++) {
                if (j !== i) {
                    textItems[j].style.opacity = '0';
                }
            }

            if (count == 1) {
                items[3].style.flex = '1';
                items[2].style.flex = '2';
                items[1].style.flex = '2.7';
            } else if (count == 2) {
                items[2].style.flex = '2.7';
                items[3].style.flex = '2';
                items[0].style.flex = '1';
            } else if (count == 3) {
                items[1].style.flex = '2';
                items[3].style.flex = '2.7';
                items[0].style.flex = '1';
            } else if (count == 4) {
                items[1].style.flex = '2';
                items[2].style.flex = '2.7';
                items[0].style.flex = '1';
            }
        }
    }



}

slide()

document.addEventListener("DOMContentLoaded", function () {
    const caroImg = document.querySelector("#caro");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    caroImg.classList.add("animate");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.7 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(caroImg);
});

document.addEventListener("DOMContentLoaded", function () {
    const scaleGirlImg = document.querySelector("#scaleGirl");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scaleGirlImg.classList.add("animate");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.9 } // Animation startet, wenn 20% sichtbar sind
    );

    observer.observe(scaleGirlImg);
});



document.addEventListener("DOMContentLoaded", function () {
    let index = 0; // Start bei erstem Bild
    const items = document.querySelectorAll(".galerie-item");

    function updateGallery() {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    document.getElementById("next").addEventListener("click", function () {
        index = (index - 1) % items.length; // Nächstes Bild
        updateGallery();
    });

    document.getElementById("prev").addEventListener("click", function () {
        index = (index + 1 + items.length) % items.length; // Vorheriges Bild
        updateGallery();
    });

    updateGallery(); // Setzt das erste Bild als aktiv
});

document.addEventListener("DOMContentLoaded", function () {
    const galerieContainer = document.getElementById("galerie");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    galerieContainer.classList.add("visible");
                    observer.unobserve(galerieContainer); // Stoppt Beobachtung nach erster Aktivierung
                }
            });
        },
        { threshold: 0.6 } // Wenn 20% sichtbar sind, startet die Animation
    );

    observer.observe(galerieContainer);
});  const cardsContainer = document.getElementById('cardsContainer');
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
