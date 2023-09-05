let Cantidad;
document.querySelector('form')
      .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
          new FormData(e.target)
        )
         Cantidad = JSON?.stringify(data)
         Cantidad = JSON.parse(Cantidad)
        console.info(Cantidad)
      })

