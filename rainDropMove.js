class rainDropMove {
  constructor() {
    this.position = createVector(random(0, width), 0);
    this.velocity = createVector(random(-10, 10), random(2, 30));
    this.acceleration = createVector(random(-0.05, 0.05), random(0, 1));
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.mult(0.9);
    this.position.add(this.velocity);
  }

  show() {
    strokeWeight(0.05);
    fill(220);
    ellipse(this.position.x, this.position.y, rainSize, rainSize);
    fill(240);
    ellipse(this.position.x - 1, this.position.y - 2, rainSize, rainSize);
    fill(255);
    ellipse(this.position.x - 3, this.position.y - 4, lightSize-6, lightSize-6);
  }

  checkEdges() {
    if (this.position.x > width || this.position.x < 0) {
      this.position.x *= -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      if (this.position.y > height) {
        this.position.y = height;
        fill(240);
        ellipse(this.position.x, this.position.y, rainSize * 2, rainSize * 1);
      }
      this.velocity.y *= -1;
    }
  }
}
