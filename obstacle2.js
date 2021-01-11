class obstacle2 {
  constructor(){
    this.pos = createVector(random(width), random(height-10));
    this.vel = createVector(-0.25, 0);
    this.acc = createVector(0,0);
    this.val=1;
  }
  
  show(){
    fill(255,0,0);
    ellipse(this.pos.x,this.pos.y, 10,10)
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
