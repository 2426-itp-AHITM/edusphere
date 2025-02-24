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