let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  // Iteration 1: road drawing
  
  //grass lines
  ctx.fillStyle = 'green'; 
  ctx.fillRect(0, 0, 50, H);
  ctx.save()

  ctx.fillStyle = 'green'; 
  ctx.fillRect(W-50, 0, 50, H);
  ctx.save()

  // grey borders
  ctx.fillStyle = 'grey';
  ctx.fillRect(50, 0, 25, H);
  ctx.save()

  ctx.fillStyle = 'grey';
  ctx.fillRect(W-75, 0, 25, H);
  ctx.save()

  //grey street
  ctx.fillStyle = 'grey';
  ctx.fillRect(100, 0, W - 200, H);
  ctx.save()

  // white lanes 
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 10;
  ctx.setLineDash([50, 100]);
  
  ctx.beginPath();
  
  ctx.moveTo(500, 50);
  ctx.lineTo(500, H);
  ctx.stroke();
  
  ctx.closePath();
  //
  // Iteration 2: car drawing
  car.draw();
  
  
  // TODO
  
  //
  // Iteration #4: obstacles
  //
  
  // TODO
  
  //
  // Iteration #5: collisions
  //
  
  // TODO
  
  //
  // Iteration #6: points
  //
  
  // TODO
  
}

document.onkeydown = function (e) {
  if (!car) return;
  
  // TODO
  switch (e.key) {
    case 'ArrowRight':
      car.moveRight();
      break;
    case 'ArrowLeft':
      car.moveLeft();
      break;
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;
  
  draw();
  
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  
  // TODO
  car = new Car();


  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
