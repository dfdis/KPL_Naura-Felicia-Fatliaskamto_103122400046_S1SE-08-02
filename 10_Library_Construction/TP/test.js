const { countLetters, countWords } = require('./TextUtil');

const text = "Hello World 123!";

console.log("Jumlah huruf:", countLetters(text));
console.log("Jumlah kata:", countWords(text));