import { mostrarEnPantalla } from './mostrarEnPantalla.js';
export function binarioinverso() {
    let numeroAconvertir = prompt("Que número binario quieres convertir a decimal");
    let numeroOriginal = numeroAconvertir;
    numeroAconvertir = parseInt(numeroAconvertir, 2);
    mostrarEnPantalla(`El numero ${numeroOriginal} en base 10 es ${numeroAconvertir}`);
}
