## Tugas pendahuluan: GUI menggunakan HTML dan CSS.

**Nama:** Naura Felicia Fatliaskamto

**NIM:** 103122400046

**Kelas:** SE-08-02

## Soal

Ini adalah kode yang mengurus jumlah semua karakter dan jumlah huruf:

const str = "Bar bar";

let jumlahSemua = 0;
for (const c of str) { 
    jumlahSemua++; 
}
console.log(total);

let jumlahHuruf = 0;
for (const c of str) { 
    if (c === ' ') continue;
    jumlahHuruf++;
}
console.log(letters);

Bagaimana caramu hanya dengan satu fungsi generik bisa mengurus keduanya?

Agar fungsi yang kamu kerjakan benar atau tidak, berikut ini adalah kode tes yang bisa kamu tempelkan:

const str = "Bar bar bar";
...
console.log(
   hitung(str, "semua") // Harusnya 11
);

console.log(
  hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa

## Kode Sumber

Tersedia di [TP5.js](./TP5.js)

## Output

![Output](image.png)

## Deskripsi

Program dibuat menggunakan satu fungsi generik hitung(str, tipe) untuk menghitung jumlah karakter dalam sebuah string. Fungsi ini mendukung dua jenis perhitungan, yaitu "semua" untuk menghitung seluruh karakter termasuk spasi, dan "huruf" untuk menghitung karakter tanpa spasi. Proses dilakukan dengan melakukan iterasi pada setiap karakter dalam string dan menyesuaikan perhitungan berdasarkan tipe yang dipilih. Output ditampilkan menggunakan console.log.