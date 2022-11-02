window.addEventListener('load', () => {

    if(window.DOM == undefined) {
        document.body.innerHTML = "<h2 style='color: red; text-align: center'>DOM.JS DOEST NOT LOADED !!!</h2>"
        return;
    }

    
    new Game();


})

class Game {

    constructor () {

        this.realPoint = 0;
        this.tanahs = []
        let lenOfTanah = 6;

        this.mencit = DOM('img', {
            attr: {class: "mancik", src : "./asset/tikus-removebg-preview.png"}
        })
    
        this.title = DOM("h1", {
            attr: {class: "game-title"},
            inner: "PENCET TIKUS"
        })
        this.wrapper = DOM("div", {
            attr: {class: "game-body"}
        })
        this.container = DOM("div", {
            attr: {class: "container", style: "min-height: 50vh"}
        })
        this.point = DOM("h3", {attr: {style: "font-weight: 800;text-align: center;"}, inner: "Point : 0"});

        document.head.append(DOM("style", {
            inner: "body {background-size: cover;background-attachment: fixed;background-position: center;}"
        }))

        while(lenOfTanah > 0) {
            let el = DOM("div", {attr: {class: "object" }, inner: DOM('img', {attr: {class: "tanah",style: "object-fit: contain; width: 100%; position: absolute; bottom: 0; left: 0;",src : "./asset/tanah-removebg-preview.png"}})});

            this.tanahs.push(el)
            this.container.append(el)
            lenOfTanah--;
        }
        
        this.showMencit();

        document.body.innerHTML = null
        this.wrapper.append(this.title, this.point, this.container)
        document.body.append(this.wrapper)

    }

    showMencit() {
        
        const clone = this.mencit.cloneNode(true);

        var selected = this.tanahs[Math.floor(Math.random()*this.tanahs.length)]
        selected.append(clone)

        setTimeout(() => {
            clone.remove();
            this.addPoint();
        }, 500)

        clone.addEventListener('click', E => {
            clone.remove();
            this.addPoint();
        }, false)
        
    }

    addPoint() {
        this.realPoint++
        this.point.innerHTML = "Point : " + this.realPoint;

        this.showMencit();
    }
}