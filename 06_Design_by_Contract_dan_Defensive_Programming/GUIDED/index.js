//fungsi untuk melakukan pembagian
function div(a, b) {
    //prakondisi
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("salah tipe data untuk argumen a");
    }

    if (b === 0) {
        return 0;
    }

    const hasil = a / b;

    //postkondisi
    if (hasil * b === a) {
        return hasil;
    }

    return 0;
}

console.log(div(20, 40));