"use strict";
let Cantidad = {};
const Convertir = () => {
    if (!Cantidad) {
        throw new Error("Cantidad no ha sido inicializada");
    }
    const num = Cantidad.dollars;
    const resultados = num * 17.15;
    const results = document.getElementById("resultados");
    if (!results) {
        throw new Error("El elemento con id 'resultados' no existe");
    }
    const paragrapht = document.createElement("p");
    paragrapht.innerHTML = `${num} dólares en pesos son: $${resultados}`;
    results.appendChild(paragrapht);
};
let Document = document;
Document.querySelector('form')
    .addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    Cantidad = JSON.stringify(data);
    Cantidad = JSON.parse(Cantidad);
    Convertir();
    console.info(Cantidad);
});
