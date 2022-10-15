import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import '../accordion.js'
import { countSyllables } from '../functions/syllable';

function Calc() {
  
  const [input, setInput] = useState([])
  const [count, setCount] = useState({sentences: 0, words: 0, syllables: 0});
  const [score, setScore] = useState(0);
  const [hardestWords, setHardestWords] = useState([]);

  const countText = (e) => {
    let text = e.target.value.trim();

    if (text === "") {
        setCount({sentences: 0, words: 0, syllables: 0});
        setInput([]);
        return;
    }

    if (["!", "?", "."].includes(text.charAt(text.length - 1))) {
        text = text.substring(0, text.length - 1)
    }
    const sentences = text.split(/[\?!\.]/);

    let numWords = 0;
    let numSyllables = 0;

    let tempInput = []
    sentences.forEach((sent) => {
        let tempSent = []

        sent = sent.trim();
        const words = sent.split(" ");
        numWords += words.length;
        
        // count syllables
        words.forEach((word) => {
            numSyllables += countSyllables(word);
            tempSent.push(word);
        });

        tempInput.push(tempSent);
    })
    setInput(tempInput);
    setCount({sentences: sentences.length, words: numWords, syllables: numSyllables});
  }

  // calculations made when state updates
  useEffect(() => {
    // calculate readability score
    setScore(206.835 - 1.015 * (count.words / count.sentences) - 84.6 * (count.syllables / count.words));
  }, [count]);

  useEffect(() => {
    // calculate most difficult words and sentences
    let hardWords = new Map();
    let hardSentences = new Map();

    input.forEach((sent) => {
        let sentSyllables = 0;
        sent.forEach((word) => {
            let wordSyllables = countSyllables(word);
            hardWords.set(word, wordSyllables);
            sentSyllables += wordSyllables;
        });
        hardSentences.set(sent, sentSyllables);
    });

    hardWords = new Map([...hardWords].sort((a, b) => b[1] - a[1]));

    let hardWordsArray = []
    hardWords.forEach((value, key) => {
        if (value > 3 && hardWordsArray.length <= 10) {
            hardWordsArray.push(key);
        }
    });
    setHardestWords(hardWordsArray);
  }, [input])

  return (
    <>
        <textarea onChange={countText}></textarea>
        <p>Sentences: {count.sentences}</p>
        <p>Words: {count.words}</p>
        <p>Syllables: {count.syllables}</p>
        <p>Score: {parseFloat(score).toFixed(2)}</p>

        <ul>
            { hardestWords.map((word) => <li>{word}</li>) };
        </ul>
    </>
  );
}

export default Calc;