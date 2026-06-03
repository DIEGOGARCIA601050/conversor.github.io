export function mostrarEnPantalla(texto)
{
  let results = document.getElementById("resultados");
  let paragrapht = document.createElement("p");
  paragrapht.innerHTML = texto;
  results.appendChild(paragrapht);
}
