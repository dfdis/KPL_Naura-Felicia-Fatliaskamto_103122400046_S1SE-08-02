## Tugas pendahuluan: GUI menggunakan HTML dan CSS.

**Nama:** Naura Felicia Fatliaskamto

**NIM:** 103122400046

**Kelas:** SE-08-02

## Soal

Diberikan dua kode yang sama-sama melakukan operasi pembagian. Pertama menggunakan asersi, kedua menggunakan eksepsi.


const assert = require('assert');

function divide(a, b) {
  assert(typeof a === 'number' && typeof b === 'number', 'Nilai harus bilangan bulat');

  assert(b !== 0, 'Tidak bisa pembagian dengan nol');

  return a / b;
}


function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Nilai harus bilangan bulat");
  }

  if (b === 0) {
    throw new Error("Tidak bisa pembagian dengan nol");
  }

  return a / b;
}

try {
  const result = divide(10, 2);
  console.log("Hasilnya adalah:", result);
} catch (error) {
  console.error("Error:", error);
}


Menurutmu, kapankah kita saatnya menggunakan asersi atau eksepsi untuk fungsi seperti ini di atas? Apakah kita harus sepenuhnya asersi, atau sepenuhnya eksepsi? Lakukan riset dan berikan jawabannya dalam bentuk esai minimal 300 kata.

## Deskripsi

Dalam pengembangan perangkat lunak, penggunaan asersi (assertion) dan eksepsi (exception) sering kali membingungkan karena keduanya sama-sama digunakan untuk menangani kondisi error. Namun, berdasarkan praktik terbaik dalam rekayasa perangkat lunak, keduanya memiliki tujuan yang berbeda dan tidak seharusnya digunakan secara saling menggantikan, melainkan dikombinasikan sesuai konteks.


Pertama, asersi digunakan untuk mendeteksi kesalahan logika internal dalam program, yaitu kondisi yang seharusnya tidak pernah terjadi jika kode ditulis dengan benar. Asersi sering dipakai saat debugging atau pengujian, dan biasanya dapat dinonaktifkan di lingkungan produksi. Oleh karena itu, asersi cocok untuk memverifikasi asumsi internal, seperti memastikan nilai tidak null di dalam fungsi privat atau memastikan invariant tertentu terpenuhi. Jika asersi gagal, itu menandakan adanya bug dalam kode, bukan kesalahan dari pengguna.


Sebaliknya, eksepsi digunakan untuk menangani kondisi yang memang mungkin terjadi saat program berjalan, terutama akibat faktor eksternal seperti input pengguna yang salah, pembagian dengan nol, atau kegagalan sistem. Eksepsi tidak bisa dinonaktifkan dan dirancang untuk ditangani (try-catch), sehingga memungkinkan program tetap berjalan atau memberikan pesan error yang jelas kepada pengguna.

Jika kita lihat pada contoh fungsi divide(a, b), maka:

> Validasi tipe input (typeof a !== "number") dan pembagian dengan nol (b === 0) adalah kesalahan yang bisa terjadi dari pengguna, sehingga lebih tepat menggunakan eksepsi.

>Menggunakan asersi untuk kondisi tersebut kurang tepat, karena jika asersi dimatikan di production, maka validasi tersebut tidak akan berjalan dan bisa menyebabkan bug yang lebih serius.

Dalam praktiknya, terdapat aturan umum:

1. Gunakan asersi untuk:
Mengecek kondisi internal yang “mustahil” terjadi jika kode benar.
Membantu debugging dan dokumentasi asumsi program.

2. Gunakan eksepsi untuk:
Validasi input dari luar (user, API, file, dll).
Kondisi runtime yang perlu ditangani secara eksplisit.


Pendekatan terbaik bukan memilih salah satu secara penuh, tetapi menggabungkan keduanya secara bijak. Bahkan dalam pengembangan library, praktik umum adalah:


Menggunakan asersi di fungsi internal (private) untuk memastikan konsistensi kode.
Menggunakan eksepsi di API publik untuk memberi feedback kepada pengguna jika terjadi kesalahan penggunaan.


Kesimpulannya, pada fungsi seperti divide, penggunaan eksepsi adalah pilihan yang tepat karena berhubungan dengan input pengguna. Asersi tetap berguna, tetapi hanya untuk konteks debugging dan validasi internal. Dengan memahami peran masing-masing, kita dapat menulis kode yang lebih aman, jelas, dan mudah dirawat.