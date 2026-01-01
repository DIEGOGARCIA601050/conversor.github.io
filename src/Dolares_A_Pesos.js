"use strict";
let cantidad = {};
const Convertir = () => {
    if (!cantidad||typeof cantidad.Dollars!==Number||isNaN(cantidad.Dollars)) {
        throw new Error("Cantidad no válida. Debe ingresar un número para dólares.");
    }
    const pesos = cantidad.dollars * 17.15;
    const resultados = document.getElementById("resultados");
    if (!resultados) {
        throw new Error("El elemento con id 'resultados' no existe");
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = `${cantidad.dollars} dólares en pesos son: $${pesos}`;
    resultados.appendChild(paragraph);
};
document.querySelector('form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        cantidad = JSON.parse(JSON.stringify(data));
        try
        {
            Convertir();
            console.info(cantidad);
        } catch(e) 
        {
            console.error(e)
        }
    });
