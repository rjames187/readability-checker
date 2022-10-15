const addSyllables = {
    anywhere: [

    ],
    end: [

    ],
};

// basic count syllable function, will add more in the future
function countSyllables (word) {
    let syllables = 0;
    const parts = word.split(/[^aeiouy]+/);
    syllables += parts.length;
    return syllables;
}

export default countSyllables;
