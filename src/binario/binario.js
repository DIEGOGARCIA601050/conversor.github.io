let results = document.getElementById("resultados");
export function binario() {
    let number = parseFloat(prompt("Que número quieres convertir a binario"));
    let binary = "";
    while (number > 0) {
        let remainder = number % 2;
        //registra los resultados en binary como cadena de texto
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }
    //lo muestra en pantalla
    let paragrapht = document.createElement("p");
    paragrapht.innerHTML = `El numero ${number} en binario es ${binary}`;
    results.appendChild(paragrapht);
}
