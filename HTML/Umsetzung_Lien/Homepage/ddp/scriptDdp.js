const tableCells = document.querySelectorAll('.stunden-container');
const stundenplan = [
    ["NWP", "Naturwissenschaften Physik", "In diesem Fach lernst du die grundlegenden Prinzipien der Physik, von Mechanik bis Elektrizitätslehre, und deren Anwendungen in der Technik."],
    ["AM", "Angewandte Mathematik", "Mathematik ist das Fundament der Informatik. Hier lernst du alles über Algebra, Analysis und Statistik, um komplexe Probleme zu lösen."],
    ["D", "Deutsch", "In Deutsch geht es um Sprachkompetenz, Literatur und Kommunikation, um dich auf eine professionelle Karriere vorzubereiten."],
    ["POSE", "Programmieren und Software Engineering", "Dieser Gegenstand ist der Schwerpunkt der Informatik an unserer Schule. Du lernst alles über moderne Programmierung von den Grundlagen bis zur Entwicklung großer Systeme wie Online-Shops, Buchungssysteme usw. Wir verwenden dazu die am Markt gängigen Plattformen .NET und Jakarta EE."],
    ["STSW", "Sozial- und Wirtschaftskunde", "Hier lernst du wirtschaftliche und gesellschaftliche Zusammenhänge verstehen, um die Welt der Wirtschaft und des Rechts besser zu erfassen."],
    ["GGPGW", "Geographie und politische Bildung", "Das Fach vermittelt Wissen über Geographie, Gesellschaft und politische Systeme, um ein besseres Verständnis der Welt zu erhalten."],
    ["AM", "Angewandte Mathematik", "Mathematik ist das Fundament der Informatik. Hier lernst du alles über Algebra, Analysis und Statistik, um komplexe Probleme zu lösen."],
    ["BWMRW", "Betriebswirtschaft und Rechnungswesen", "In diesem Fach lernst du die wirtschaftlichen Grundlagen und die Buchhaltung von Unternehmen kennen."],
    ["POSE", "Programmieren und Software Engineering", "Dieser Gegenstand ist der Schwerpunkt der Informatik an unserer Schule. Du lernst alles über moderne Programmierung von den Grundlagen bis zur Entwicklung großer Systeme wie Online-Shops, Buchungssysteme usw. Wir verwenden dazu die am Markt gängigen Plattformen .NET und Jakarta EE."],
    ["STSW", "Sozial- und Wirtschaftskunde", "Hier lernst du wirtschaftliche und gesellschaftliche Zusammenhänge verstehen, um die Welt der Wirtschaft und des Rechts besser zu erfassen."],
    ["GGPGW", "Geographie und politische Bildung", "Das Fach vermittelt Wissen über Geographie, Gesellschaft und politische Systeme, um ein besseres Verständnis der Welt zu erhalten."],
    ["RK", "Religion und Kultur", "In diesem Fach setzt du dich mit ethischen und religiösen Themen auseinander und lernst verschiedene Kulturen kennen."],
    ["BWMBO", "Betriebswirtschaft und Management", "Egal, ob du nach der Schule selber ein Unternehmen gründest oder in einer Firma angestellt bist, es ist sehr wichtig, dass du verstehst, wie Unternehmen aufgebaut sind, wie dort Abläufe definiert werden, was das Gesetz von Unternehmen verlangt, wie Buchhaltung und Kostenrechnung funktionieren usw. Das alles lernst du hier. Wir verwenden dazu die weltweit größte Enterprise-Software und haben diese als einzige Schule auch hausintern installiert."],
    ["POSE", "Programmieren und Software Engineering", "Dieser Gegenstand ist der Schwerpunkt der Informatik an unserer Schule. Du lernst alles über moderne Programmierung von den Grundlagen bis zur Entwicklung großer Systeme wie Online-Shops, Buchungssysteme usw. Wir verwenden dazu die am Markt gängigen Plattformen .NET und Jakarta EE."],
    ["BSPK", "Bewegung und Sport", "Sport und Bewegung sind wichtig für die Gesundheit. In diesem Fach geht es um Fitness, Teamgeist und sportliche Aktivitäten."],
    ["D", "Deutsch", "In Deutsch geht es um Sprachkompetenz, Literatur und Kommunikation, um dich auf eine professionelle Karriere vorzubereiten."],
    ["BWMRW", "Betriebswirtschaft und Rechnungswesen", "In diesem Fach lernst du die wirtschaftlichen Grundlagen und die Buchhaltung von Unternehmen kennen."],
    ["AM", "Angewandte Mathematik", "Mathematik ist das Fundament der Informatik. Hier lernst du alles über Algebra, Analysis und Statistik, um komplexe Probleme zu lösen."],
    ["WLCHW", "Wirtschaftliche und rechtliche Grundlagen", "Hier bekommst du eine Einführung in wirtschaftliche und rechtliche Themen, die für Unternehmen relevant sind."],
    ["BSPK", "Bewegung und Sport", "Sport und Bewegung sind wichtig für die Gesundheit. In diesem Fach geht es um Fitness, Teamgeist und sportliche Aktivitäten."],
    ["POSE", "Programmieren und Software Engineering", "Dieser Gegenstand ist der Schwerpunkt der Informatik an unserer Schule. Du lernst alles über moderne Programmierung von den Grundlagen bis zur Entwicklung großer Systeme wie Online-Shops, Buchungssysteme usw. Wir verwenden dazu die am Markt gängigen Plattformen .NET und Jakarta EE."],
    ["D", "Deutsch", "In Deutsch geht es um Sprachkompetenz, Literatur und Kommunikation, um dich auf eine professionelle Karriere vorzubereiten."],
    ["AM", "Angewandte Mathematik", "Mathematik ist das Fundament der Informatik. Hier lernst du alles über Algebra, Analysis und Statistik, um komplexe Probleme zu lösen."],
    ["WLCHW", "Wirtschaftliche und rechtliche Grundlagen", "Hier bekommst du eine Einführung in wirtschaftliche und rechtliche Themen, die für Unternehmen relevant sind."],
    ["RK", "Religion und Kultur", "In diesem Fach setzt du dich mit ethischen und religiösen Themen auseinander und lernst verschiedene Kulturen kennen."],
    ["POSE", "Programmieren und Software Engineering", "Dieser Gegenstand ist der Schwerpunkt der Informatik an unserer Schule. Du lernst alles über moderne Programmierung von den Grundlagen bis zur Entwicklung großer Systeme wie Online-Shops, Buchungssysteme usw. Wir verwenden dazu die am Markt gängigen Plattformen .NET und Jakarta EE."],
    ["CABS", "Computerarchitektur und Betriebssysteme", "Wenn man eine gute Informatikerin oder ein guter Informatiker werden will, dann ist es wohl selbstverständlich, dass man weiß, wie ein Computer aufgebaut ist. Dazu nehmen wir schon auch mal einen Lötkolben in die Hand. Mit vielen praktischen Übungen lernst du die Welt der Hardware kennen. Weiters lernst du noch, wie Betriebssysteme (also Windows, macOS, Linux und noch viele andere mehr) programmiert werden."],
    ["NWP", "Naturwissenschaften Physik", "In diesem Fach lernst du die grundlegenden Prinzipien der Physik, von Mechanik bis Elektrizitätslehre, und deren Anwendungen in der Technik."],
    ["BWMBO", "Betriebswirtschaft und Management", "Egal, ob du nach der Schule selber ein Unternehmen gründest oder in einer Firma angestellt bist, es ist sehr wichtig, dass du verstehst, wie Unternehmen aufgebaut sind, wie dort Abläufe definiert werden, was das Gesetz von Unternehmen verlangt, wie Buchhaltung und Kostenrechnung funktionieren usw. Das alles lernst du hier. Wir verwenden dazu die weltweit größte Enterprise-Software und haben diese als einzige Schule auch hausintern installiert."],
    ["SOPK", "Soziale und personale Kompetenzen", "Dieses Fach hilft dir, deine sozialen und kommunikativen Fähigkeiten zu verbessern, um im Berufsleben erfolgreich zu sein."],
    ["NWP", "Naturwissenschaften Physik", "In diesem Fach lernst du die grundlegenden Prinzipien der Physik, von Mechanik bis Elektrizitätslehre, und deren Anwendungen in der Technik."],
    ["E", "Englisch", "Englisch ist die internationale Sprache der IT. In diesem Fach verbesserst du deine Sprachkompetenz für den Beruf."],
    ["E", "Englisch", "Englisch ist die internationale Sprache der IT. In diesem Fach verbesserst du deine Sprachkompetenz für den Beruf."]

];


const outputBox = document.getElementById('output-box');
const outputBoxH = document.getElementById('output-boxH');
const outputBoxH2 = document.getElementById('output-boxH2');
const outputBoxP = document.getElementById('output-boxP');
const overlay2 = document.getElementById('overlay2');

tableCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const [überschrift,überschrift2, text] = stundenplan[index];
        
        outputBoxH.textContent = `${überschrift}`;
        outputBoxH2.textContent = `${überschrift2}`
        outputBoxP.textContent = `${text}`
        outputBox.style.visibility = 'visible';
        overlay2.style.visibility = 'visible';
    });
});

overlay2.addEventListener('click', () => {
    // Overlay und Box wieder unsichtbar machen
    overlay2.style.visibility = 'hidden';
    outputBox.style.visibility = 'hidden';
});






document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    
    container1.style.display = "block";
    container2.style.display = "none";
    
    button1.addEventListener("click", function () {
        container1.style.display = "block";
        container2.style.display = "none";

        button2.style.backgroundColor = "#00264d";
        button2.style.color = "#5F6265";

        button1.style.backgroundColor = "white";
        button1.style.color = "black";
    });
    
    button2.addEventListener("click", function () {
        container1.style.display = "none";
        container2.style.display = "block";

        button1.style.backgroundColor = "#00264d";
        button1.style.color = "#5F6265";

        button2.style.backgroundColor = "white";
        button2.style.color = "black";
    });
});



function showPopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay2");
    popup.style.display = "block";
    overlay.style.display = "block";
}

function hidePopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay2");
    popup.style.display = "none";
    overlay.style.display = "none";
}

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
// Intersection Observer für die Animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Wenn der Abschnitt sichtbar wird, Animation starten
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Beobachtung beenden, nachdem die Animation gestartet wurde
      }
    });
  }, { threshold: 0.8 }); // Der Abschnitt ist sichtbar, wenn 50% davon im Viewport sind
  
  // Ziel-Element beobachten
  const abschlussSection = document.querySelector('#txt');
  observer.observe(abschlussSection);
  


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