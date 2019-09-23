function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(5);
  angleMode(DEGREES);
  frameRate(60);
  // put setup code here
}

function draw() {
/////////////////////
  push();

  translate((windowWidth/2)-250,(windowHeight/2)-250);
  strokeWeight(0.5);
  stroke(lerpColor(color("red"),color("blue"),frameCount/150));
  points = 200;
  pointAngle = (360/points);
  raggio = 250;
  angle=0;
  angle= angle+pointAngle;

  x =(cos((frameCount)*angle) * raggio);
  y =(sin((frameCount)*angle) * raggio);
	line(raggio+250,250,x+250,y+250);

  pop();
/////////////////////
  push();

  translate((windowWidth/2)-250,(windowHeight/2)-250);

  strokeWeight(0.5);
  stroke(lerpColor(color("blue"),color("red"),frameCount/150));
  points1 = 200;
  pointAngle1 = (360/points1);
  raggio1 = -250;
  angle1=0;
  angle1= angle1+pointAngle1;

  x =(cos(frameCount*angle1) * raggio1);
  y =(sin(frameCount*angle1) * raggio1);
	line(0,250,x+250,y+250);

  pop();
///////////////////////
  push();

  translate((windowWidth/2)+300,(windowHeight/2)-300);

  strokeWeight(0.5);
  stroke(lerpColor(color("yellow"),color("violet"),frameCount/100));
  points2 = 200;
  pointAngle2 = (360/points2);
  raggio2 = 100;
  angle2=0;
  angle2= angle2+pointAngle2;

  x =(cos(frameCount*angle2) * raggio2);
  y =(sin(frameCount*angle2) * raggio2);
  line(raggio2+100,100,x+100,y+100);

  pop();
//////////////////////
  push();

  translate((windowWidth/2)+300,(windowHeight/2)-300);

  strokeWeight(0.5);
  stroke(lerpColor(color("violet"),color("yellow"),frameCount/100));
  points2 = 200;
  pointAngle2 = (360/points2);
  raggio2 = -100;
  angle2=0;
  angle2= angle2+pointAngle2;

  x =(cos(frameCount*angle2) * raggio2);
  y =(sin(frameCount*angle2) * raggio2);
  line(0,100,x+100,y+100);

  pop();
//////////////////////

ellipse(mouseX,mouseY,1,1);
noStroke();

//////////////////

textAlign(LEFT);
drawWords(width * 0.05);

textAlign(RIGHT);
drawWords2(width * 0.95);



}

function drawWords(x){
  fill(255);
  textSize(20);
  text('MOVE YOUR MOUSE TO CREATE AWESOME STARS!', x, 100);
}

function drawWords2(x){
  fill(255);
  textSize(20);
  text('PRESS IT AND YOU DESTROY THEM LIKE A POWERFUL GOD!', x, 670);
}


function mousePressed(){
  background(5);
}
