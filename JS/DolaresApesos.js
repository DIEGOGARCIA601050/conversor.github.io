// Obtener el elemento del input de dólares
let divisa = document.getElementById('dollars').value
// Convertir el valor del input a un número entero
let num = parseInt(divisa);
// Guardar el valor del input en la variable n
let n = divisa;
// Obtener el botón de conversión
let convertidor = document.getElementById("convert-button");
// Agregar un evento de click al botón de conversión
convertidor.addEventListener("click", conversor);
// Función que se ejecuta al hacer clic en el botón de conversión
function conversor() {
  // Llamar a la función de conversión
  conversión();
}
// Función que realiza la conversión de dólares a pesos
function conversión() {
  // Calcular el resultado de la conversión
  let resultados = num * 17.15;
  // Obtener el elemento donde se mostrarán los resultados
  let results = document.getElementById("resultados");
  // Crear un nuevo párrafo para mostrar el resultado de la conversión
  let paragrapht = document.createElement("p");
  // Asignar el contenido del párrafo con el resultado de la conversión
  paragrapht.innerHTML = n + " dólares en pesos son: $" + resultados;
  // Agregar el párrafo al elemento de resultados
  results.appendChild(paragrapht);
}