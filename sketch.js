var man;
var bad = [];
var bad2 = [];
var sceneNum = 0;
let timer = 22 
//finish up hit function https://www.youtube.com/watch?v=l0HoJHc-63Q&t=1027s
function setup() {
  createCanvas(640, 360);
  man = new Person();
  for (let i = 0; i < 100;   i++) {
    bad[i] = new obstacle();
  }
  for (let l = 0; l < 100;   l++) {
    bad2[l] = new obstacle2();
}
}
  
function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -50);
    man.applyForce(force);
  } else if (key == 's') {
    sceneNum++;

  }

  if (sceneNum > 2) {
    sceneNum = 0;
  }
}

function mouseClicked() {
  if (mouseX >= 230 && mouseX <= 430 && mouseY >= 250 && mouseY <= 300)
    if (sceneNum===0) {
    scene1();
  }
  else if (sceneNum===2) {
    scene0();
  }
  else if (sceneNum===3) {
    scene0();
  }
}


function draw() {
  
  if (sceneNum === 0){
    scene0();
  } else if (sceneNum === 1) {
    scene1();
    fill(0,255,255);
    textSize(35);
    text(timer, 400, 50);
    
    if (frameCount % 60 == 0 && timer > 0) {
    timer --;
      man.score --;
    
    }
    if (/*timer == 0 &&*/ man.score >= 10) {
      sceneNum = 2;
    }
    if (timer == 0 && man.score < 100) {
      sceneNum = 3;
    }
   

  } else if (sceneNum === 2) {
    scene2();
  }
    else if (sceneNum === 3) {
      scene3();
    }
}



function scene0() {
  sceneNum=0;
  background("black");
  textSize(50);
  fill(255, 255, 0);
  text("The Adventure of Blocc Boi", 20, 100);
  textSize(20);
  text("Press the space bar to jump", 190, 175);
  text("Collect 500 as you can in 22 seconds", 150, 235);
  text("work against the clock");
  fill(252, 252, 252);
  rect( 230, 250, 200, 50);
  fill(0, 0, 0);
  text("Click Here to Start", 240, 280);
}

function scene1() {
  sceneNum=1;
  background(51);
  translate(-man.pos.x + 100, 0);
  let gravity = createVector(0, 3)

  man.applyForce(gravity);
  man.update();
  man.display();
  man.edges();
  

  //Silly hard code or obstacle
  //fill(50, 30, 200);
  //rect(200, height - 50, 100, 100);

  
  
  for (i = 0; i < 100; i++) {
    if (man.hits(bad[i])) {
      console.log("Game Over!");
      console.log(bad[i].pos.x);
    }
    //console.log(bad[i].pos.x);

    bad[i].show();
    bad[i].update();
  }

  for (l = 0; l < 100; l++) {
    if (man.hits(bad2[l])) {
      console.log("Game Over!");
      console.log(bad2[l].pos.x);
    }
    //console.log(bad2[l].pos.x);

    bad2[l].show();
    bad2[l].update();
  }
}

function scene2() {
  sceneNum=2;
  timer=22;
  man.score=0;

  background("black");
  fill(255, 255, 0);
  textSize(40);
  text("YOU WIN!!", 200, 150);
  fill(255,255,255);
  textSize("30");
  fill(252, 252, 252);
  rect( 230, 250, 200, 50);
  fill(0, 0, 0);
  textSize(20);
  text("Press to Play again", 250, 280);
}

function scene3() {
  sceneNum=3;
  timer=22
  man.score=0;
  background("black");
  fill(252, 252, 252);
  rect( 230, 250, 200, 50);
  fill('red');
  textSize (50);
  text("YOU LOSE", 200, 200)
  
  
}
