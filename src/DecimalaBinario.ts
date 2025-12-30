let resultados = document.getElementById("resultados");

let Botonbinario = document.getElementById("binario");
Botonbinario.addEventListener("click", binario);
let number;
function binario(): void {
  let number: number = parseFloat(prompt("Que número quieres convertir a binario"));
  let binary:string = "";
  while (number > 0) {
    let remainder: number = number % 2;
    //registra los resultados en binary como cadena de texto
    binary = remainder + binary;
    number = Math.floor(number / 2);
  }
  //lo muestra en pantalla
  let paragrapht:HTMLElement = document.createElement("p");
  paragrapht.innerHTML = `El numero ${number} en binario es ${bniary}`;
  resultados.appendChild(paragrapht);
}

  //de binario a decimal
  let botonbinario = document.getElementById('-binario')
  botonbinario.addEventListener('click', binarioAdecimal)
  function binarioAdecimal() {
    let numAconvertir: number = parseFloat(prompt("Que número quieres convertir a binario"));
    let numEnBinario = numAconvertir;
    numAconvertir = parseInt(numAconvertir, 2)
    let paragrapht = document.createElement("p");
    paragrapht.innerHTML = `El numero ${numEnbinario} en decimal es ${numAconvertir}`;
    resultados.appendChild(paragrapht);
  }

const botonDeBorrado = document.getElementById('borrando')
botonDeBorrado.addEventListener('click',()=>{results.innerHTML=null})
