const pokemon = document.querySelector(`#pokemon`);
//const click = document.getElementById(`pokemon`)
const click = document.addEventListener(`click`, () => {
    console.log("Le diste un click");
})

function renderPokemon(image){
    pokemon.setAttribute(`src`, image)
}
//
fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
     .then(response => response.json())
     .then(pokemon => {
         renderPokemon(pokemon.sprites.front_default)
     })
//
/* fetch(`pokemon.json`,{

})
.then(response => response.json())
.then(data => {
    renderPokemon(data.image)
})  */
//petición:
//blob(binary large object).
/* fetch(`aud1.jpg`)
.then(response => response.blob())
.then(binaryLargeObject => {
    const domString = URL.createObjectURL(binaryLargeObject)
    debbuger
    renderPokemon(data.image)}) */



