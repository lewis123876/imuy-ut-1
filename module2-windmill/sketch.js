let h;
let angle = 0;

function setup() {
  createCanvas(500, 500);
  colorMode(HSL);
  h = random(0, 360);
  angleMode(DEGREES);
}

function draw() {
  background(h, 100, 84);

  let millHeight = map(mouseY, 0, 500, 0, 300);
  
  fill(47, 70, 92);
  strokeWeight(4);
  beginShape();
  vertex(200, 500);
  vertex(300, 500);
  vertex(275, millHeight);
  vertex(225, millHeight);
  vertex(200, 500);
  endShape(CLOSE);
  
  fill(20, 48, 50);
  rect(225, 445, 50, 70, 20);
  
  translate(width/2, millHeight);
  
  angle += 2;
  rotate(angle);

  fill(20, 48, 50); 
  for (let i =0; i < 4; i++){
    push();
    rotate(90 * i);
    triangle(0, 0, -25, 100, 25, 100);
    pop();
  }

}
