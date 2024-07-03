/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "your"];
  let adj = ["greatest", "biggest", "smartest", "best", "almighty"];
  let noun = ["car", "bikes", "hats", "shoes", "shirt"];
  let domain = [".com", ".org", ".io", ".us", ".net"];

  const domainGenerator = () => {
    let numeroAleatorioDecimal = Math.random();
    let indexPronoun = Math.floor(numeroAleatorioDecimal * pronoun.length);
    let indexAdj = Math.floor(numeroAleatorioDecimal * adj.length);
    let indexNoun = Math.floor(numeroAleatorioDecimal * noun.length);
    let indexDomain = Math.floor(numeroAleatorioDecimal * domain.length);

    let wordPronoun = pronoun[indexPronoun];
    let wordAdj = adj[indexAdj];
    let wordNoun = noun[indexNoun];
    let wordDomain = domain[indexDomain];

    let generator = "www." + wordPronoun + wordAdj + wordNoun + wordDomain;

    return generator;
  };

  console.log(domainGenerator());

  document.querySelector("#generator").innerHTML = domainGenerator();
};
