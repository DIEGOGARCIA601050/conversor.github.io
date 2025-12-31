"use strict";
let Cantidad = {};
const Convertir = () => {
    if (!Cantidad) {
        throw new Error("Cantidad no ha sido inicializada");
    }
    const pesos = Cantidad.dollars * 17.15;
    const resultados = document.getElementById("resultados");
    if (!resultados) {
        throw new Error("El elemento con id 'resultados' no existe");
    }
    const paragrapht = document.createElement("p");
    paragrapht.innerHTML = `${Cantidad.dollars} dólares en pesos son: $${pesos}`;
    resultados.appendChild(paragrapht);
};
let Document = document;
Document.querySelector('form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        Cantidad = JSON.parse(JSON.stringify(data));
        Convertir();
        console.info(Cantidad);
    });
