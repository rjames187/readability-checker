import React from 'react';
import '../App.css';
import '../accordion.js'
export default Calc;

function Calc() {
  const script = document.createElement('script');
  script.src = "../accordion.js";
  document.body.appendChild(script);
  return (
    <div>
      <div id="textprocess">
        <textarea id="inputbox" name="inputbox" rows="4" cols="50"
        placeholder="Paste your text here."></textarea>
        <br></br>
        <button type="button" id="submitbutton">
          Submit!
        </button>
        <br></br>
        <textarea id="outputbox" name="outputbox" rows="4" cols="50"
        placeholder="Once you push the button, its text complexity 
        analysis will become available."></textarea>
      </div>
      <br></br>
      <div id="faq">
        <button class="accordion">What is readability?</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
}