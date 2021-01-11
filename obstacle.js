class obstacle {
  constructor(){
    this.pos = createVector(random(width), random(height-10));
    this.vel = createVector(-2, 0);
    this.acc = createVector(0,0);
    this.val=2;
  }
  
  show(){
    fill('black');
    ellipse(this.pos.x ,this.pos.y, 5,5)
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
