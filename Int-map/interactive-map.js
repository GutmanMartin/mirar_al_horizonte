intMp.x = 0
intMp.y = 0

let x = 0
let y = 0

intMp.coord = [
    [-34.6523875, -58.5890816],
    [-34.622818, -58.406025],
    [-34.538974333586665, -58.47544907550936],
    [-34.6394515, -58.5640349],
    [-34.59005, -58.571379],
    [-34.60557049180816, -58.454605396094905],
    [-34.491567, -58.836561],
    [-34.5786403, -58.470839],
    [-34.53942581746228, -58.48353918596767],
    [-34.5742687, -58.4744296],
    [-34.5343614, -58.4744296],
    [-34.5862509, -58.4851378],
    [-34.57486328836318, -58.51000758240317],
    [-34.533564, -58.485424],
     [-34.592160, -58.563054],
    [-34.5944921, -58.4059338],
    [-34.7724, -58.651],
    [-34.6140459, -58.3975418],
    [-34.5574421, -58.5388855],
]
intMp.bCoord = intMp.coord
intMp.K = 0;

sel = 0


function setupInteractiveMap() {
    intMp.map = intMp.loadImage('../int-map/map.jpg')
    setupPlaces()
}

function interactiveMap() {
    intMp.push();
    if(
        intMp.mouseX < intMp.width &&
        intMp.mouseX > 0 &&
        intMp.mouseY > 0 &&
        intMp.mouseY < intMp.height
    ) {
        moveTheCanvas();
    }
    intMp.translate(intMp.x, intMp.y)



    sel = selectClosestC()
    intMp.image(intMp.map, 0, 0)
    placeTheDots()
    
    y = intMp.mouseY - intMp.y
    x = intMp.mouseX - intMp.x
    intMp.pop();
}

function moveTheCanvas() {
    /**/
        if(intMp.mouseX< 100 || intMp.mouseY < 100 || intMp.mouseX > intMp.width - 100 || intMp.mouseY > intMp.height - 100) {
            
            if(intMp.mouseX > intMp.width - 100 && intMp.x > -intMp.width) {
                intMp.x -= 3
            } else if(intMp.mouseX < 100 && intMp.x < 0) {
                intMp.x += 3
            }

            if(intMp.mouseY > intMp.height - 100 && intMp.y > -intMp.height) {
                intMp.y -= 4
            } else if(intMp.mouseY < 100 && intMp.y < 0) {
                intMp.y += 4
            }
            
        }
}

    intMp.mousePressed = () => {
        console.log("[" +intMp.int(x) + " , " + intMp.int(y) + "]")
    }

function placeTheDots() {
    

    for(let i = 0; i < places.length; i++) {
        if (i == sel) {
            intMp.fill(157, 184, 7)
            intMp.stroke(157, 184, 7)
            //intMp.text(i, places[i].coords[0], places[i].coords[1]);
            intMp.circle(places[i].coords[0], places[i].coords[1],5)
            intMp.fill(0)
        } else {
            intMp.fill(0)
            intMp.stroke(0)
            intMp.circle(places[i].coords[0], places[i].coords[1],5)
        }
    }
    
}


function selectClosestC() {
    let dists = places.map(x => 
        intMp.dist(intMp.mouseX - intMp.x, intMp.mouseY - intMp.y, x.coords[0], x.coords[1])    
    )
    let sel = 0
    let selDist = 5000
    for(let i = 0; i < dists.length; i++){
        if (dists[i] < selDist) {
            sel = i
            selDist = dists[i]
        }
    }
    if (selDist < 100) {
        return sel
    } else {
        return null
    }
}