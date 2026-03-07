function fizzBuzz(params) {
    if(!Array.isArray(params)) {
        return "Input tidak valid";
    }

    let hasil = [];

    for( let i = 0; i < params.length; i++) {
        if(params[i] % 14 === 0) {
            hasil.push("FizzBuzz");
        } else if(params[i] % 7 === 0) {
            hasil.push("Buzz");
        } else if(params[i] % 2 === 0) {
            hasil.push("Fizz");
        } else {
            hasil.push(params[i]);
        }
    }

    return hasil.join(" ");

}
module.exports = fizzBuzz;  