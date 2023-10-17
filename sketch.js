let rainDrops = [];
let rainDrops_1 = [];
let rainSize;
let lightSize = 10;
let bg_Aplha = 255;


function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(bg_Aplha, 40);

  for (let r of rainDrops) {
    r.show();
    r.update();
    r.checkEdges();
  }
  
  for (let r1 of rainDrops_1) {
    r1.show();
    r1.update();
    r1.checkEdges();
  }

  if (mouseIsPressed) {
    rainSize += 0.03;
    lightSize += 0.01;
  }   
  if (!mouseIsPressed) {
   rainSize = random(13, 15);
    lightSize = 10;
  }
  if (keyIsDown(UP_ARROW)) {
    bg_Aplha += 1;
  }
   if (keyIsDown(DOWN_ARROW)) {
    bg_Aplha -= 1;
  }
}

function mousePressed() {
  let fs = fullscreen();
  let r = new rainDropMove();
  rainDrops.push(r);
   let r1 = new rainDropMove_1();
  rainDrops_1.push(r1);
}