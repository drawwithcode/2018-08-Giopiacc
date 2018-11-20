var myImage1;
var myImage2;
var myImage3;
var myImage4;
var bg;

var v = 1;
var value;
var r = 1;

var bubbles = [];

function preload(){
  myImage1 = loadImage('./assets/fish.png');
  myImage2 = loadImage('./assets/jelly.png');
  myImage3 = loadImage('./assets/pesce.png');
  myImage4 = loadImage('./assets/bubble.png');
  bg = loadImage('./assets/sea.jpeg');


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background('lightblue');
  imageMode(CENTER);
  setShakeThreshold(10);
  angleMode(DEGREES);

  var bubblesNumber = random(10,100);

    for (var i = 0; i < bubblesNumber; i++) {
      var myBubbles = new Bubbles (myImage4,random(0,width),random(0,height),random(10,30),random(10,30));

      myBubbles.speed = random(1, 3);
      bubbles.push(myBubbles);
    }

}

function draw() {
  if (r == 1) {
    background('blue');
    textAlign(CENTER);
    textFont('Helvetica');
    fill(255);

    textStyle(BOLD);

    textSize(50);
    text('Turn on X axis and Z axis', width/2, height/2-100);

    text('Shake the phone', width/2, height/2-0);

    fill('yellow');
    text('CLICK TO START!', width/2, height/2+200);

    textStyle(NORMAL);
    fill(255);
    text('to discover the fishes', width/2, height/2-50);

    text('to move them!', width/2, height/2+50);

    for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
    }


  }

if(mouseIsPressed == true && r == 1){
    r = 0;
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage1, width/2, height/2, 420, 450);
    textAlign(CENTER);
    textSize(45);
    textStyle(BOLD);
    fill('#1200AC');
    text('Trumpet Fish',width/2, height/2+380);
    }
  }



function Bubbles(_img, _x, _y, _w, _h) {
  this.img = _img
  this.x = _x
  this.y = _y
  this.w = _w
  this.h = _h
  this.speed = 2;

  var yDir = random(0,1);
  var xDir = random(-1,1);

  this.display = function() {
    image(this.img, this.x, this.y,this.w, this.h)
  }

  this.move = function() {
    this.x += this.speed * xDir;
   this.y += this.speed * yDir;

   if (this.y > height || this.y < 0) {
     yDir = yDir * -1;
   }
   if (this.x > width || this.x < 0) {
     xDir = xDir * -1;
   }
  }
}

function deviceTurned(){
  if(r==0){
  if(v == 1 && turnAxis === 'X'){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage2, width/2, height/2, 380, 580);
    v = 3;
    textAlign(CENTER);
    textSize(45);
    fill('#1200AC');
    text('Jellyfish',width/2, height/2+380);
  } else if(v == 2 && turnAxis === 'X'){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage1, width/2, height/2, 420, 450);
    textAlign(CENTER);
    textSize(45);
    fill('#1200AC');
    text('Trumpet Fish',width/2, height/2+380);
    v = 1;
  } else if(v == 3 && turnAxis === 'X'){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage3, width/2, height/2, 550, 380);
    v = 2;
    textAlign(CENTER);
    textSize(45);
    fill('#1200AC');
    text('Tosakin',width/2, height/2+380);
  }

  if(v == 3 && turnAxis === 'Z'){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage2, width/2, height/2, 380, 580);
    textAlign(CENTER);
    textSize(45);
    fill('#1200AC');
    text('Jellyfish',width/2, height/2+380);
  } else if(v == 1 && turnAxis === 'Z'){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage1, width/2, height/2, 420, 450);
    textAlign(CENTER);
    textSize(45);
    fill('#1200AC');
    text('Trumpet Fish',width/2, height/2+380);
  } else if(v == 2 && turnAxis === 'Z'){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage3, width/2, height/2, 550, 380);
    textAlign(CENTER);
    textSize(45);
    fill('#1200AC');
    text('Tosakin',width/2, height/2+380);
  }
}
}

function deviceShaken(){
  if(r==0){
  var speedY = 10 * random(-10,20);
  var speedX = 10 * random(-10,20);
  var yDirection = 1;
  var xDirection = 1;
  var y = speedY * yDirection;
  var x = speedX * xDirection;

  if(v == 3){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage2,width/2, y + height/2, 380, 580);

    for (var j = 0; j < bubbles.length; j++) {
    bubbles[j].display();
    bubbles[j].move();
    }
  } else if(v == 1){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage1, width/2, y + height/2, 420, 450);
    for (var k = 0; k < bubbles.length; k++) {
    bubbles[k].display();
    bubbles[k].move();
    }
  } else if(v == 2){
    background('blue');
    image(bg,width/2,height/2,width,height);
    image(myImage3, width/2, y + height/2, 550, 380);
    for (var n = 0; n < bubbles.length; n++) {
    bubbles[n].display();
    bubbles[n].move();

    }
  }
}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
