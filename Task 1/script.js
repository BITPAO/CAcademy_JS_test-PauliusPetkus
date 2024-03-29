/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document
  .getElementById("weight-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let kg = document.getElementById("search").value;

    let pounds = kg * 2.2046;
    let grams = kg / 0.001;
    let ounces = kg * 35.274;

    let output = `<p>Svoris svarais (lb): ${pounds.toFixed(2)}</p>
                        <p>Svoris gramais (g): ${grams.toFixed(2)}</p>
                        <p>Svoris uncijomis (oz): ${ounces.toFixed(2)}</p>`;

    document.getElementById("output").innerHTML = output;
  });
