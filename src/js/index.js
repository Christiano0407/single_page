video.addEventListener(`click`, function() {
    console.log("Click");
    this.classList.add("hidden");
    import(`./player.js`).then(({player}) => {
       // console.log(player);
       setTimeout(() => {
        player.play();
       }, 100)
    })
});