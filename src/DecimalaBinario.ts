let results = document.getElementById("resultados");

let Botonbinario = document.getElementById("binario");
Botonbinario.addEventListener("click", binario);
let number;
function binario(): void {
  let number:string = prompt("Que número quieres convertir a binario");
  let n:number = parseFloat(number);
  let binary:string = "";
  while (number > 0) {
    let remainder: number = number % 2;
    //registra los resultados en binary como cadena de texto
    binary = remainder + binary;
    number = Math.floor(number / 2);
  }
  //lo muestra en pantalla
  let paragrapht = document.createElement("p");
  paragrapht.innerHTML = "El número " + n + " a binario es: " + binary;
  results.appendChild(paragrapht);
}

  //de binario a decimal
  let botonbinario = document.getElementById('-binario')
  botonbinario.addEventListener('click', binarioinverso)
  function binarioinverso() {
    let number = prompt("Que número quieres convertir a binario");
    let n = number;
    number = parseInt(number, 2)
    let paragrapht = document.createElement("p");
    paragrapht.innerHTML = "El número " + n + " en base 10 es: " + number;
    results.appendChild(paragrapht);
  }

const botonDeBorrado = document.getElementById('borrando')
botonDeBorrado.addEventListener('click',()=>{results.innerHTML=null})