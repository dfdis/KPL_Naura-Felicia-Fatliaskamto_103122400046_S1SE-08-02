function hitung(str, tipe) {
    let jumlah = 0;

    for (const c of str) {
        if (tipe === "huruf" && c === ' ') continue;
        jumlah++;
    }

    return jumlah;
}

// TEST
const str = "Bar bar bar";

console.log(
   hitung(str, "semua") // 11
);

console.log(
  hitung(str, "huruf") // 9
);

hitung(str, "huruf"); // tidak terjadi apa-apa