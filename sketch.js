const sketch = (p) => {
    p.actualImage = 0
    p.imgs = []

    p.setup = function() {
        let canvas = p.createCanvas(800,500);
        loadThings();
        p.background(125);
    }


    p.draw = function() {
        p.image(p.imgs[p.actualImage], 0, 0)
    }

    

    function loadThings() {
        p.imgs[0] = p.loadImage("imgs/map-1.png")
        p.imgs[1] = p.loadImage("imgs/map-2.jpeg")
        p.imgs[2] = p.loadImage("imgs/map-3.png")
    }


    p.mousePressed = () => {
        if(
            p.mouseX < p.width &&
            p.mouseX > 0 &&
            p.mouseY > 0 &&
            p.mouseY < p.height) {
                p.nextMap()
               // console.log("click")
        }
    }

    p.nextMap = () => {
        p.actualImage = (p.actualImage + 1) % p.imgs.length

    }

}

let superMap = new p5(sketch, "holder")