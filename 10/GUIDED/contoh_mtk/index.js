export function tambah(x, y) {
    return x + y;
}

export function kurang(x, y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

// /**
//  * Mencari nilai x dalam persamaan linear
//  * @param {string} str - Persamaan linear dalam bentuk string
//  */

// export function persamaan(str) {
//     //misal 3x + 16 = 0
//     // cari x

//     const sisikanan = /\=(.*)/g;
//     const sisikiri = /(.*)\=/g;

//     const sukukiri = [];
//     const sukukanan = [];

//     const kiri = sisikiri.exec(str);
//     const kanan = sisikanan.exec(str);

//     console.log(kiri);
//     console.log(kanan);
// }

// persamaan("3x + 5 = 14");

/**
 * @param {string} x
 * @param {string} a
 */
export function plsv_dua(x, a) {
    const coeff = parseInt(x);
    return{
        "x": coeff,
        "dengan": "=",
        "hasil": bagi(a, coeff)
    };
}
/**
 * @param {string} x
 * @param {string} a
 * @param {string} b
 */

export function plsv_tiga(x, a, b) {
    const kostanta = b + a;

    //jika aay "x" saja
    if (x.length === 1) {
        return kostanta;
    } else if (x.length === 2) {
        const v = parseInt(x);
        return bagi(kali, v);
    }
    return 0;
}

export function ptlsv_dua(x, op, a) {
    const coeff = parseInt(x);

    const balikkan_op = {
        ">=": "<=",
        "<=": ">=",
        ">": "<",
        "<": ">"
    };

    const op_baru = coeff < 0 ? balikkan_op[op] : op;

    return{
        "x": "x",
        "dengan": op_baru,
        "hasil": bagi(a, coeff)
    };
}
