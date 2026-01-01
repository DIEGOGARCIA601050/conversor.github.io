let results = document.getElementById("resultados");
export function binarioinverso() {
    let numeroAconvertir = prompt("Que número binario quieres convertir a decimal");
    let numeroOriginal = numeroAconvertir;
    numeroAconvertir = parseInt(numeroAconvertir, 2);
    let paragrapht = document.createElement("p");
    paragrapht.innerHTML = `El numero ${numeroOriginal} en base 10 es ${numeroAconvertir}`;
    results.appendChild(paragrapht);
}
