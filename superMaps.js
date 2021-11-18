const sketch = (p) => {
    p.actualImage = 0
    p.gamma = 50
    p.imgs = []
    p.cd = Date.now() + 5000

    p.setup = function() {
        let canvas = p.createCanvas(700,700);
        loadThings();
        p.background(125);
    }


    p.draw = function() {
        if(p.gamma < 255) {p.gamma += 0.05}
        p.tint(255, p.map(p.gamma, 0, 100, 0, 255));
       
        p.image(p.imgs[p.actualImage], 0, 0)

        if(p.cd < Date.now()) {p.nextMap()}
    }



    function loadThings() {
        p.imgs[0] = p.loadImage("../superMap/map0.jpg")
        p.imgs[1] = p.loadImage("../superMap/map1.jpg")
        p.imgs[2] = p.loadImage("../superMap/map2.jpg")
        p.imgs[3] = p.loadImage("../superMap/map3.jpg")
        p.imgs[4] = p.loadImage("../superMap/map4.jpg")
    }
    

    p.mousePressed = () => {
        if(
            p.mouseX < p.width &&
            p.mouseX > 0 &&
            p.mouseY > 0 &&
            p.mouseY < p.height &&
            p.gamma > 3) {
                p.nextMap()
            }
        }
        
    p.nextMap = () => {
        p.actualImage = (p.actualImage + 1) % p.imgs.length
        p.gamma = 0
        p.cd = Date.now() + 20000
    }

}

let superMap = new p5(sketch, "superimposing-maps-holder")