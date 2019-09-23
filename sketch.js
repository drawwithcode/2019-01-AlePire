function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(220);
  angleMode(DEGREES);
  frameRate(40);
  // put setup code here
}

function draw() {
  translate((windowWidth/2)-250,(windowHeight/2)-250);

  strokeWeight(0.5);
  stroke(lerpColor(color("red"),color("blue"),frameCount/125));
  points = 200;
  pointAngle = (360/points);
  raggio = 250;
  angle=0;
  angle= angle+pointAngle;

  x =(cos(frameCount*angle) * raggio);
  y =(sin(frameCount*angle) * raggio);
	line(raggio+250, 250,x+250,y+250);


  if(frameCount == 200){
      noLoop();
    }
}

function mousePressed(){
  if (frameCount == 200)
  remove();
}
