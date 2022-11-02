window.addEventListener('load', () => {

    if(window.DOM == undefined) {
        document.body.innerHTML = "<h2 style='color: red; text-align: center'>DOM.JS DOEST NOT LOADED !!!</h2>"
        return;
    }

    
    new Game();


})

class Game {

    constructor () {
        this.title = DOM("h1", {
            attr: {class: "game-title"},
            inner: "PENCET TIKUS"
        })

        this.wrapper = DOM("div", {
            attr: {class: "game-body"}
        })
        this.container = DOM("div", {
            attr: {class: "container"}
        })

        this.point = DOM("span");

        document.head.append(DOM("style", {
            inner: "body {background-size: cover;background-attachment: fixed;background-position: center;}"
        }))



        document.body.innerHTML = null
        this.wrapper.append(this.title, this.point)
        document.body.append(this.wrapper)

    }

    setTanah(path) {

    }
    setTikus(path) {

    }
}