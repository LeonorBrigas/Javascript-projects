const canvas = document.getElementById("draw");
// we need the context in order to draw in (its not directly in canvas)
// ask for 2dimension
const ctx = canvas.getContext("2d");

// resize canvas to be the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// apply color to a shape
ctx.strokeStyle = "#BADA55"
// defines the borders shape when lines cross
ctx.lineJoin = "round";
// defines the end lines
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return; // strop from running when they are not mouse down
  console.log(e);
  // hsl https://mothereffinghsl.com/
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to ( last point given by the console)
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // update for last position to be the first
  [ lastX, lastY ] = [e.offsetX, e.offsetY];
  hue++;
  // to reset hue has hsl goes until 360
  if(hue >= 360){
    hue = 0;
  }
  if( ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [ lastX, lastY ] = [e.offsetX, e.offsetY];
});


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
