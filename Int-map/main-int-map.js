const intMpS = ( s ) => {
    let map

    s.setup = () => {
        s.createCanvas(700, 543);
        setupInteractiveMap()
        
    };
  
    s.draw = () => {
        s.background(125);
        
        interactiveMap()
    }

};
  
let intMp = new p5(intMpS, 'int-map-holder');

function map(var1, min1, max1, min2,max2) {
    return min2+(max2-min2)*((var1-min1)/(max1-min1))
}




const photoS = (s) => {
    s.fillGamma = 10

    s.setup = () => {
        s.createCanvas(266, 400)

    }
    
    s.draw = () => {
        s.stroke(255)
        s.line(0, s.height / 2, s.width, s.height/2)

        if(sel != null) {
            s.fill(0, 30)
            //s.text(sel, 30,30)
            //s.tint(255, s.fillGamma)
            s.image(places[sel].photo,0,0)
         //   if(s.fillGamma < 255) {s.fillGamma += 10}
        } else {
            s.fill(255, 10)
            s.rect(0, 0,s.width,s.height)
          //  if(s.fillGamma > 0) {s.fillGamma -= 10}
        }
    }

}

let photoCanvas = new p5(photoS, 'photo-holder');