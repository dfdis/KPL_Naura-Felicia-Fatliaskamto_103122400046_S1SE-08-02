const elemenEditor = document.getElementById("editor-kecil"); //ambil elemen dari HTML dengan id "editor-kecil" untuk diakses di JavaScript

const elemenHf = document.getElementById("hf");//elemen span jumlah huruf total
const elemenHb = document.getElementById("hb");//elemen span jumlah huruf besar
const elemenHk = document.getElementById("hk");//elemen span jumlah huruf kecil

function HitungHuruf(event) {
   // const textlength = event.target.value.length;

    const teks = event.target.value;// text yang diketik di textarea
    const teksBaru = teks.split(" ");//membagi teks jadi array berdasarkan spasi

    let jumlahHuruf = 0; // simpan jumlah huruf total
    let jumlahHurufBesar = 0;// simpan jumlah huruf besar
    let jumlahHurufKecil = 0;// simpan jumlah huruf kecil

    for (let i = 0; i < teksBaru.length; i++) {
        const kata = teksBaru[i];
        jumlahHuruf += kata.length; //tambah panjang kata ke jumlah huruf total
        for (let j = 0; j < kata.length; j++) {
            const huruf = kata[j]; //ambil setiap huruf dalam kata
            if (huruf >= "A" && huruf <= "Z") { //cek apakah huruf adalah huruf besar
                jumlahHurufBesar++;
            } else if (huruf >= "a" && huruf <= "z") {//cek apakah huruf adalah huruf kecil
                jumlahHurufKecil++;
            }
        }
    }

    elemenHf.textContent = jumlahHuruf;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil;
    //mengubah teks konten dari elemen span di HTML dengan jumlah huruf total, huruf besar, dan huruf kecil yang dihitung
} 

elemenEditor.addEventListener("input", HitungHuruf);
//addEventListener untuk memanggil fungsi HitungHuruf setiap kali ada input di textarea, sehingga jumlah huruf akan diperbarui secara real-time saat pengguna mengetik