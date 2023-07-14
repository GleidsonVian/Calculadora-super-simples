function somar() {
  let s = Number(prompt("digite um numero"));
  let output = document.getElementById("output");
  let n2 = Number(prompt("digite outro numero"));
  output.innerText = s + n2;
}

function diminuir() {
  let s = Number(prompt("digite um numero"));
  let output = document.getElementById("output");
  let n2 = Number(prompt("digite outro numero"));
  output.innerText = s - n2;
}

function multiplicar() {
  let s = Number(prompt("digite um numero"));
  let output = document.getElementById("output");
  let n2 = Number(prompt("digite outro numero"));
  output.innerText = s * n2;
}

function dividir() {
  let s = Number(prompt("digite um numero"));
  let output = document.getElementById("output");
  let n2 = Number(prompt("digite outro numero"));
  output.innerText = s / n2;
}
