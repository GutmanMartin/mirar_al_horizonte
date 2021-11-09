const sprMpS = (s) => {
    s.setup = () => {
        s.createCanvas(400,400)
        s.background(10)
        s.img1 = s.loadImage('imgs\map-1.png')
        s.img2 = s.loadImage("imgs\map-2.jpeg")
        s.img3 = s.loadImage("imgs\map-3.png")
    }


    s.draw = () => {
        
    }
}

let sprMap = new p5(sprMpS, 'superimposing-maps-holder')