//buatlah array berisi 5 minuman favoritmu, dan simpan dalm sebuah variabel bernama listminuman.
//setelah itu ubah 2 elemen pertama menggunakan notasi kurung dan penugasan
//terkahir tambahkan minuman baru di depan array

const listminuman = ["Teh", "vanilla latte", "Jus", "matcha", "Air putih"];
listminuman[0] = "susu";
listminuman[1] = "americano";
listminuman.unshift("Cappucino");
console.log(listminuman);