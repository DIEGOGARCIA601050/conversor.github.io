"use strict";
import { binario } from "./binario.js";
import { binarioinverso } from "./binario/decimal.js";
let results = document.getElementById("resultados");

//de decimal a binario
let Botonbinario = document.getElementById("binario");
Botonbinario.addEventListener("click", binario);
let number;

//de binario a decimal
let botonbinario = document.getElementById('-binario');
botonbinario.addEventListener('click', binarioinverso);

//boton de borrado
const botonDeBorrado = document.getElementById('borrando');
botonDeBorrado.addEventListener('click', () => { results.innerHTML = null; });
