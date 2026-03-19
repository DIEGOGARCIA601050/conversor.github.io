"use strict";
let cantidad = { dollars: 0 };
const Convertir = () => {
    const dollars = Number(cantidad.dollars);
    if (Number.isNaN(dollars)) {
        throw new Error("Cantidad no válida. Debe ingresar un número para dólares.");
    }
    const pesos = dollars * 17.15;
    const resultados = document.getElementById("resultados");
    if (!resultados) {
        throw new Error("El elemento con id 'resultados' no existe");
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = `${dollars} dólares en pesos son: $${pesos.toFixed(2)}`;
    resultados.appendChild(paragraph);
};

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        cantidad = {
            dollars: data.dollars || 0
        };
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

