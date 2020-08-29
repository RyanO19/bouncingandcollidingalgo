var rect1, rect2;


function setup() {
  createCanvas(800,400);
 rect1 =  createSprite(400, 200, 50, 80);
 rect2 = createSprite(0,0, 80, 50)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

