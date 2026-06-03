"use strict";
import { mostrarEnPantalla } from './binario/mostrarEnPantalla.js';
let cantidad = 0;
const Convertir = () => {
    if (Number.isNaN(cantidad)) {
        throw new Error("Cantidad no válida. Debe ingresar un número para dólares.");
    }
    const pesos = cantidad * 17.15;
    mostrarEnPantalla(`${cantidad} dólares en pesos son: $${pesos.toFixed(2)}`);
};

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        cantidad = data.dollars || 0;
        try {
            Convertir();
            console.info(cantidad);
        } catch (e) {
            console.error(e);
            const resultados = document.getElementById("resultados");
            if (resultados) {
                const error = document.createElement("p");
                error.style.color = "red";
                error.textContent = e.message;
                resultados.appendChild(error);
            }
        }
    });
} else {
    console.error("No se encontró el formulario para conversión de dólares.");
}

