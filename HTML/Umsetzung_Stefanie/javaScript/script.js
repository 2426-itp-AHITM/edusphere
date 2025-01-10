document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();

            const parent = toggle.closest('li');
            const isActive = parent.classList.contains('active');

            // Schließe nur Geschwister-Dropdowns in derselben Ebene
            const siblingDropdowns = parent.parentElement.querySelectorAll(':scope > .dropdown.active, :scope > .dropdown-sub.active');
            siblingDropdowns.forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });

            // Aktiviere oder deaktiviere das aktuelle Dropdown
            if (!isActive) {
                parent.classList.add('active');
            } else {
                parent.classList.remove('active');
            }
        });
    });

    // Dropdowns schließen, wenn außerhalb geklickt wird
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav')) {
            document.querySelectorAll('.dropdown.active, .dropdown-sub.active').forEach(item => {
                item.classList.remove('active');
            });
        }
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


let categoriesData = {
    "category0": {
        "headline": "Codes & Future Workshop an der HTL Leonding",
        "text": "Am 25. Oktober fand der Cloudflight Coding Contest (CCC) statt, ein spannender und europaweit ausgetragener Programmierwettbewerb, der Teilnehmerinnen und Teilnehmer vor knifflige algorithmische Herausforderungen stellt.",
        "image": "../img/roboter.png"
    },
    "category1": {
        "headline": "Codes & Future Workshop an der HTL Leonding",
        "text": "Am 25. Oktober fand der Cloudflight Coding Contest (CCC) statt, ein spannender und europaweit ausgetragener Programmierwettbewerb, der Teilnehmerinnen und Teilnehmer vor knifflige algorithmische Herausforderungen stellt.",
        "image": "../img/roboter.png"
    },
    "category2": {
        "headline": "Codes & Future Workshop an der HTL Leonding",
        "text": "Am 25. Oktober fand der Cloudflight Coding Contest (CCC) statt, ein spannender und europaweit ausgetragener Programmierwettbewerb, der Teilnehmerinnen und Teilnehmer vor knifflige algorithmische Herausforderungen stellt.",
        "image": "../img/roboter.png"
    },
    "category3": {
        "headline": "Codes & Future Workshop an der HTL Leonding",
        "text": "Am 25. Oktober fand der Cloudflight Coding Contest (CCC) statt, ein spannender und europaweit ausgetragener Programmierwettbewerb, der Teilnehmerinnen und Teilnehmer vor knifflige algorithmische Herausforderungen stellt.",
        "image": "../img/roboter.png"
    }
};

function changeNews(slide) {
    let abteilungen = document.querySelectorAll('.category');
    const parent = document.getElementById("categories");

    if (abteilungen.length <= slide || slide < 0) {
        console.error('Ungültiger Slide-Wert oder zu wenige Kategorien:', { slide, abteilungen });
        return;
    }

    // Elemente auswählen
    let elem1 = abteilungen[slide];
    let elem2 = abteilungen[3]; // z. B. das 4. Element

    // Den `onclick`-Handler der beiden Elemente auslesen
    let onclick1 = elem1.getAttribute('onclick');
    let onclick2 = elem2.getAttribute('onclick');

    // Die Zahlen aus dem `onclick`-Handler extrahieren
    let number1 = onclick1.match(/\d+/)[0]; // Die Zahl aus dem ersten `onclick`
    let number2 = onclick2.match(/\d+/)[0]; // Die Zahl aus dem zweiten `onclick`

    // Die Zahlen vertauschen
    let swappedOnclick1 = onclick1.replace(number1, number2);
    let swappedOnclick2 = onclick2.replace(number2, number1);

    // `onclick`-Events mit den vertauschten Zahlen wieder setzen
    elem1.setAttribute('onclick', swappedOnclick1);
    elem2.setAttribute('onclick', swappedOnclick2);

    // Temporären Platzhalter hinzufügen
    const placeholder = document.createElement("div");
    parent.insertBefore(placeholder, elem1);

    // Elemente vertauschen
    parent.insertBefore(elem1, elem2);
    parent.insertBefore(elem2, placeholder);

    // Platzhalter entfernen
    parent.removeChild(placeholder);

    // Text und Bild mit den Werten aus categoriesData updaten
    // Zuerst den richtigen Key für das aktuelle "slide" ermitteln
    let categoryKey = `category${slide}`;

    // Die zugehörigen Daten für Text und Bild holen
    let categoryData = categoriesData[categoryKey];

    // HTML-Elemente für Text und Bild finden und updaten
    let valueText = document.getElementById("news-text");
    let valueHeadline = valueText.querySelector("h1"); // Assuming the headline is in <h1>
    let valueImg = document.getElementById("news-image").querySelector("img"); // Assuming image container has the id "news-image"

    // Text und Bild aktualisieren
    if (valueHeadline) {
        valueHeadline.textContent = categoryData.headline || categoryData.text; // Falls Headline existiert, Text oder Headline verwenden
    }
    if (valueText.querySelector("p")) {
        valueText.querySelector("p").textContent = categoryData.text; // Text aktualisieren
    }
    if (valueImg) {
        valueImg.src = categoryData.image; // Bild-URL aktualisieren
    }

    let textContainer = document.getElementById("text-container")
    let styleElement = getComputedStyle(abteilungen[slide]).borderLeftColor
    console.log(styleElement)

    textContainer.style.backgroundColor = styleElement;

    abteilungen[slide].classList.add('animate'); // Animation starten

    // Animation nach Ende entfernen (damit sie wieder neu gestartet werden kann)
    abteilungen[slide].addEventListener('animationend', () => {
        element.classList.remove('animate');
    }, { once: true });
    
}



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
