const BASE_URL = `http//pokeapi.co/api/v2`;
const $image = document.querySelector(`#image`);
const $name = document.querySelector(`#name`);

function renderError(status) {
    $name.textContent = `${status} No encontado`
}

function renderPok(pokemon) {
    $image.setAttribute(`src`, pokemon.sprites.front_default)
}

function ajax({url, method = `GET`, async = true, done = (), error = () => {}, responseType = `jason`}) {
 function status(readyState) {
     switch(readyState) {
         case 0: return `uninitilized`
         case 1: return `loading`
         case 2: return  `loaded`
         case 3: return `interactive`
         case 4: return `completed`
     }
 }
}

const request = new XMLHttpRequest()
request.responseType = responseType
console.log(status(request.readyState), request.readyState)

