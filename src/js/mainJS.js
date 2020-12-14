//Javascript para REACT
// DYNAMIC IMPORTS
 video.addEventListener(`click`, function() {
    console.log("Click");
    this.classList.add("hidden");
    import(`./play.js`).then(({player}) => {
       // console.log(player);
       setTimeout(() => {
        player.play();
       }, 100)
    })
}); 

// 
/* video.addEventListener(`click`, function(){
    console.log(`Click`);
    this.classList.add(`hidden`)
    //import
    import(`./play.js`).then()
}) */