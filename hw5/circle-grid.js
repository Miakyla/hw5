function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  for ( var x = 0; x <= width; x += 50) {
    for ( var y = 0; y <= height; x += 50) {
      fill (0);
      ellipse( x, y, 25, 25);
    }
  }
}
