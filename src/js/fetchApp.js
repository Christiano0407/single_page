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
//

/* PROMESAS */
const compras = [];
const shopping = new Promise((resolve, reject) => {
    console.log(`Ejerce tú compra en el mercado; vayamos por secciones`);

    setTimeout(() => {
    compras.push(`Frutas`)
    console.log(`Ya tengo la fruta.`)
    setTimeout(() => {
        compras.push(`Verduras`)
        console.log(`Ya tengo la verdura.`)
        setTimeout(() => {
            compras.push(`Carne`)
            console.log(`Ya tengo la Carne.`)
            setTimeout(() => {
                compras.push(`Pollo`)
                console.log(`Ya escogí el pollo.`)
                setTimeout(() => {
                    compras.push(`pagado`)
                    console.log(compras)
                    resolve(compras)
                    console.log(`Ya tengo todo`)
                    },2000)
                },2000) 
            }, 2000)
        }, 2000)
    }, 2000)
})
shopping
.then((data) => {
    renderMessage(data.toString())
})
.catch((message) => {
    renderMessage(message)
})




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




