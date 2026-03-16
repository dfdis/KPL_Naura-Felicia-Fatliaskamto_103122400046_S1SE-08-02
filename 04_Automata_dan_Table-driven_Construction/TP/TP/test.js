const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const smallLetterElement = document.getElementById("hk");
const hurufBesarBtn = document.getElementById("huruf-besar");
const hurufKecilBtn = document.getElementById("huruf-kecil");

// Hitung karakter & huruf kecil
editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    charCountElement.textContent = text.length;

    let jumlahKecil = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'a' && text[i] <= 'z') jumlahKecil++;
    }
    smallLetterElement.textContent = jumlahKecil;
});

// Tombol besar/kecil
hurufBesarBtn.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

hurufKecilBtn.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});

// Mode terang/gelap
function modeTerang() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
}

function modeGelap() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
}