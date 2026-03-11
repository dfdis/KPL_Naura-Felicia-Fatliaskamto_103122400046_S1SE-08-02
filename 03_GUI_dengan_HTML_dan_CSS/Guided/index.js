const elemenEditor = document.getElementById("editor-kecil");

const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");
const elemenHk = document.getElementById("hk");

function HitungHuruf(event) {
   // const textlength = event.target.value.length;

    const teks = event.target.value;
    const teksBaru = teks.split(" ");

    let jumlahHuruf = 0;
    let jumlahHurufBesar = 0;
    let jumlahHurufKecil = 0;

    for (let i = 0; i < teksBaru.length; i++) {
        const kata = teksBaru[i];
        jumlahHuruf += kata.length;
        for (let j = 0; j < kata.length; j++) {
            const huruf = kata[j];
            if (huruf >= "A" && huruf <= "Z") {
                jumlahHurufBesar++;
            } else if (huruf >= "a" && huruf <= "z") {
                jumlahHurufKecil++;
            }
        }
    }

    elemenHf.textContent = jumlahHuruf;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil;
} 

elemenEditor.addEventListener("input", HitungHuruf);