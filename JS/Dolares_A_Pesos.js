let Cantidad;
const Convertir = ()=>{
  let num = Cantidad.dollars
  // Calcular el resultado de la conversión
  let resultados = num * 17.15;
  // Obtener el elemento donde se mostrarán los resultados
  let results = document.getElementById("resultados");
  // Crear un nuevo párrafo para mostrar el resultado de la conversión
  let paragrapht = document.createElement("p");
  // Asignar el contenido del párrafo con el resultado de la conversión
  paragrapht.innerHTML = num + " dólares en pesos son: $" + resultados;
  // Agregar el párrafo al elemento de resultados
  results.appendChild(paragrapht);
}
document.querySelector('form')
      .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
          new FormData(e.target)
        )
         Cantidad = JSON?.stringify(data)
         Cantidad = JSON.parse(Cantidad)
        Convertir()
        console.info(Cantidad)
      });