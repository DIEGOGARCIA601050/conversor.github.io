let results = document.getElementById("resultados");
export function binarioinverso() {
    let numeroAconvertir = prompt("Que número binario quieres convertir a decimal");
    let n = number;
    number = parseInt(number, 2);
    let paragrapht = document.createElement("p");
    paragrapht.innerHTML = `El numero ${n} en base 10 es ${number}`;
    results.appendChild(paragrapht);
}
