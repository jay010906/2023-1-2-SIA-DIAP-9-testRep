class rainDropMove_1 {
  constructor() {
    this.position = createVector(random(0, width), 0);
    this.velocity = createVector(random(-10, 10), random(2, 2));
    this.acceleration = createVector(random(-0.05, 0.05), random(0, 0.5));
    this.rectY = height;
    this.rectH = 1;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.mult(0.9);
    this.position.add(this.velocity);
  }

  show() {
   strokeWeight(0.05);
    fill(220);
    ellipse(this.position.x, this.position.y, rainSize - 5, rainSize);
    fill(240);
    ellipse(this.position.x - 1, this.position.y - 2, rainSize - 5, rainSize);
    fill(255);
    ellipse(this.position.x - 3, this.position.y - 4, lightSize - 7, lightSize - 7);
  }

  checkEdges() {
    if (this.position.x > width || this.position.x < 0) {
      this.position.x *= -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      if (this.position.y > height) {
        this.position.y = height;
        fill(240);
        ellipse(this.position.x, this.position.y, rainSize * 1.2, rainSize * 1);
        push();
        noStroke();
        rect(0, this.rectY, width, this.rectH);
        this.rectY -= 0.005;
        this.rectH += 0.005;
        pop();
      }
      this.velocity.y *= -1;
    }
  }
}
