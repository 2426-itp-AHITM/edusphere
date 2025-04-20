let isGerman = true;

function toggleLanguage() {
    const atFlag = document.getElementById('flag-at');
    const ukFlag = document.getElementById('flag-uk');
    const label = document.getElementById('language-label');

    if (isGerman) {
        atFlag.style.opacity = "0"; // Österreich-Flagge ausblenden
        ukFlag.style.opacity = "1"; // UK-Flagge einblenden
        //label.textContent = "ENG";
    } else {
        atFlag.style.opacity = "1"; // Österreich-Flagge einblenden
        ukFlag.style.opacity = "0"; // UK-Flagge ausblenden
    }
    isGerman = !isGerman;
}
