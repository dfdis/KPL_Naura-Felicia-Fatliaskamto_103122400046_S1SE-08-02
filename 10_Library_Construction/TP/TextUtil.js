function countLetters(text) {
    const matches = text.match(/[a-zA-Z]/g);
    return matches ? matches.length : 0;
}

function countWords(text) {
    const matches = text.match(/[a-zA-Z]+/g);
    return matches ? matches.length : 0;
}

module.exports = {
    countLetters,
    countWords
};