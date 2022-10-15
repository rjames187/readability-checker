import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import '../accordion.js'
import { countSyllables } from '../functions/syllable';

function Calc() {

  const [count, setCount] = useState({sentences: 0, words: 0, syllables: 0});
  const [score, setScore] = useState(0);

  const countText = (e) => {
    let text = e.target.value.trim();

    if (text === "") {
        setCount({sentences: 0, words: 0, syllables: 0});
        return;
    }

    if (["!", "?", "."].includes(text.charAt(text.length - 1))) {
        text = text.substring(0, text.length - 1)
    }
    const sentences = text.split(/[\?!\.]/);

    let numWords = 0;
    let numSyllables = 0;

    sentences.forEach((sent) => {
        sent = sent.trim();
        const words = sent.split(" ");
        numWords += words.length;
        
        // count syllables
        words.forEach((word) => {
            numSyllables += countSyllables(word);
        });
    })

    setCount({sentences: sentences.length, words: numWords, syllables: numSyllables});
  }

  // calculate readability score
  useEffect(() => {
    setScore(206.835 - 1.015 * (count.words / count.sentences) - 84.6 * (count.syllables / count.words));
  }, [count]);

  return (
    <>
        <textarea onChange={countText}></textarea>
        <p>Sentences: {count.sentences}</p>
        <p>Words: {count.words}</p>
        <p>Syllables: {count.syllables}</p>
        <p>Score: {parseFloat(score).toFixed(2)}</p>
    </>
  );
}

export default Calc;