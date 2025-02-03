function restartAnimation() {
  // Alle Bars auswählen
  const bars = document.querySelectorAll('.bar');

  // Für jede Bar die Animation zurücksetzen
  bars.forEach((bar) => {
      // Animation entfernen, um sie neu zu starten
      bar.style.transition = 'none';
      bar.style.height = '0'; // Zurücksetzen auf Startwert

      // Erzwungene Neuzeichnung, damit die Animation neu starten kann
      void bar.offsetHeight;

      // Animation wieder aktivieren
      bar.style.transition = 'height 1.5s ease-out';

      // Originalhöhe zurücksetzen (z.B. 150px, 50px etc.)
      const originalHeight = window.getComputedStyle(bar).getPropertyValue('--original-height') || bar.style.height;
      bar.style.height = originalHeight;
  });
}

// Setze beim Laden des Dokuments die ursprünglichen Höhen als Custom Properties
document.querySelectorAll('.bar').forEach((bar) => {
  bar.style.setProperty('--original-height', bar.style.height);
});

document.addEventListener("DOMContentLoaded", () => {
  // Dropdown-Menü überwachen
  const yearDropdown = document.getElementById("year");

  yearDropdown.addEventListener("change", () => {
      // Alle Balken zurücksetzen
      const bars = document.querySelectorAll(".bar");
      bars.forEach(bar => {
          // Animation entfernen
          bar.style.animation = "none";
          
          // Reflow erzwingen, um die Animation zurückzusetzen
          bar.offsetHeight; 
          
          // Animation wieder hinzufügen
          bar.style.animation = ""; 
      });
  });
});





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
    const stats = document.querySelector(".info");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.classList.add("animate");
                    observer.unobserve(entry.target); // Stoppt weiteres Beobachten
                }
            });
        },
        { threshold: 0.6 } // Startet, wenn 20% des Elements sichtbar sind
    );

    observer.observe(stats);
});

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
    const absolventen = document.querySelectorAll(".absolventen");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Stoppt Beobachtung nach erster Aktivierung
                }
            });
        },
        { threshold: 1 } // Animation startet, wenn 20% sichtbar sind
    );

    absolventen.forEach((element) => {
        observer.observe(element);
    });
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
});
