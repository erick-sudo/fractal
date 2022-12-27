const canvaswrapper = document.getElementById("canvas-wrapper")

//Get window Dimensions
const H = innerHeight * 0.95
const W = (innerWidth*0.75)>H ? H : innerWidth * 0.95

console.log(H, W)

//Create canvas and get context
let canvas = document.createElement("canvas")
//Set canvas dimensions
canvas.width = W
canvas.height = H


let cx = canvas.getContext("2d")
cx.fillStyle = "aqua"



//Add canvas to the DOM
canvaswrapper.appendChild(canvas)

function branch(length, angle, scale) {
	// body...
	cx.fillRect(0, 0, 1, length*0.98)
	if(length<8) {
		return
	}

	cx.save()
	cx.translate(0, length)
	cx.rotate(-angle)
	branch(length*scale, angle, scale)
	cx.rotate(2*angle)
	branch(length*scale, angle, scale)
	cx.restore()
}

function drawFractals(x,y, angle, scale) {
	cx.clearRect(0,0, W, H)
	cx.save()
	cx.translate(x, y);
	branch(x*0.21, angle, scale)
	cx.restore()
}

let angle = 0.01
let flag = true;
let interval = setInterval(()=> {
	if(angle>0.8) {
		flag = false
	} else if (angle<0) {
		flag = true
	}
	angle = flag ? angle +=0.001 : angle-=0.01
	drawFractals(W/2, H*0.2, angle, 0.82)
}, 1)

