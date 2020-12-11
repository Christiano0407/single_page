const $pokemon = document.querySelector(`#pokemon`);
//const click = document.getElementById(`pokemon`)
const click = document.addEventListener(`click`, () => {
    console.log("Le diste un click")
})
const $message = document.querySelector(`#message`);

function renderPokemon(image){
    $pokemon.setAttribute(`src`, image)
}

function renderMessage(message){
    $message.textContent = message
}
//
fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
     .then(response => response.json())
     .then(pokemon => {
         renderPokemon(pokemon.sprites.front_default)
     })
     .catch(() => {renderMessage(`Pokemon no encontrado :( `)})