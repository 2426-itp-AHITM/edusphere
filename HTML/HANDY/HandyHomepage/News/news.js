let rowCount = 0;

function loadMore() {
    const gallery = document.getElementById("gallery");
    for (let i = 0; i < 4; i++) {  // 4 neue Bilder pro Reihe
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `
            <img id="new" src="../img/new.png" alt="Bild">
        `;
        gallery.appendChild(item);
    }
    rowCount++;
}

// Initial eine Reihe laden
loadMore();