/**Consumiendo API**/
const contenido = document.getElementById('check');
function traer() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(datos => {
        console.log(datos)
        contenido.innerHTML =
        `<option selected="true" disabled="disabled">
              País
          </option>
        `
  for(let valor of datos){
    contenido.innerHTML += `
    <option>
    ${ valor.name }
    </option>
    `
    }
  })
  }
  traer();

