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
/* const compras = [];
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
            reject(`No! Yo no quiero carne.`)
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
}) */

//otra Promesa:
function buy (thingToBuy, time= 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          renderMessage(`${thingToBuy}`)
          resolve(`${thingToBuy}`)
      }, time)
    })
}
//otra:
const cart = []
console.time()
Promise.all([
    buy(`Frutas`,3000),
    buy(`Verduras`,1000),
    buy(`Pollo`,4000),
    buy(`Granola`,2000),
    buy(`Carne`,5000),
])
.then((cart) => {
    console.timeEnd()
    renderMessage(cart.toString())
})

//otra:
/* function shopping(){
    const cart = []
    return buy(`Fruta`)
    .then((thing) => {cart.push(thing); return buy(`Verduras`)})
    .then((thing) => {cart.push(thing); return buy(`Pollo`)})
    .then((thing) => {cart.push(thing); return buy(`Granola`)})
    .then((thing) => {cart.push(thing); return cart })
}
shopping()
.then((cart) => {
   renderMessage(cart.toString())
}) */
/* buy(`frutas`)
.then((thing) => {
    renderMessage(thing)
}) */



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




