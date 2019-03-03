function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 390; i = i + 5) {
    triangle(200,10,i,390,i, 390);
    noFill();
  }
}
