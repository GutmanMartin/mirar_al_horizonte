const intMpS = ( sketch ) => {
  
    sketch.setup = () => {
        sketch.createCanvas(800, 600);
        setupInteractiveMap()
    };
  
    sketch.draw = () => {
        sketch.background(125);
        interactiveMap()
    }

};
  
let intMp = new p5(intMpS, 'int-map-holder');

function map(var1, min1, max1, min2,max2) {
    return min2+(max2-min2)*((var1-min1)/(max1-min1))
}




const photoS = (s) => {
    s.fillGamma = 0

    s.setup = () => {
        s.createCanvas(266, 400)

    }
    
    s.draw = () => {
        s.background(10)
        if(sel != null) {
            s.fill(255, s.fillGamma)
            s.text(sel, 10,10)
            if(s.fillGamma < 255) {s.fillGamma += 10}
        } else {
            s.fill(255, - s.fillGamma)
            s.rect(0,s.width,s.height)
            if(s.fillGamma > 0) {s.fillGamma -= 10}
        }
    }

}

let photoCanvas = new p5(photoS, 'photo-holder');