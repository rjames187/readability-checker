// code taken from https://stackoverflow.com/questions/28384718/regex-understanding-syllable-counter-code

function countSyllables(word) {
    if (!word) { return 0 };
    word = word.toLowerCase();                                     //word.downcase!
    if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
    let matches = word.match(/[aeiouy]{1,2}/g);                    //word.scan(/[aeiouy]{1,2}/).size
    if (matches) {
        return matches.length;
    } else {
        return 0;
    }
}

export { countSyllables };