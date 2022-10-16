import '../App.css';

function Info() {
  return (
    <>
      <hr></hr>
      <h2 id="background">Background Information</h2>
      <h3>The Flesch-Kincaid Readability Test</h3>
      <img src="fkrt.svg" alt="206.835 - 1.015 * (total words / total sentences) - 84.6 * (total syllables / total words)"/>
      <p>
        This program uses the Flesch-Kincaid reading ease test, a heuristic for determining how difficult it is to read an English passage.
        Usage of the formula dates back to 1978 by the US Navy to evaluate the understandability of technical documents.
        In some US states, the formula has been established as a standard for assessing the readability of legal documents.
        It's also used in word processing software like Microsoft Word and Grammarly. 
      </p>
      <h3>The Merit of this Tool</h3>
      <p>
        This tool aims to expand on free readability calculators ubiquitously available on the internet by providing actionable feedback
        in the form of high syllable words and sentences. While it does not offer the same array of features that fancy services like 
        Readable.com offer, it does offer a quick and free alternative that should meet many users' needs. 
      </p>
      <h3>⚠️A Note on Limitations⚠️</h3>
      <p>Given that the formula only relies on 3 parameters and completely ignores contextual factors such as word commonality, 
         it cannot be trusted to be completely accurate. Reading ease can be thought of as a subjective measure that has way
         more complexity and multifacetedness than can be represented by the Flesch-Kincaid formula.
         The results are most questionable for small pieces of text so we 
         recommend that users only analyze passages atleast 50 words long. 
      </p>
    </>
  );
}

export default Info;