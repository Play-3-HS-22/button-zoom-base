
let trees = [];

let zoom = 500000;

var projection = d3
  .geoMercator()
  .center([8.3090, 47.0502])
  .translate([400, 400])
  .scale(zoom)

function preload() {
  trees = loadJSON("trees.json");
}

function setup() {
  createCanvas(800, 800);

  noLoop();
}

function draw() {
  background(255);

  // draw the trees
  for (let i = 0; i < trees.features.length; i++) {
    let tree = trees.features[i];

    let coords = tree.geometry.coordinates;

    let pos = projection(coords);

    let x = pos[0];
    let y = pos[1];

    fill(0);
    noStroke();
    ellipse(x, y, 2, 2);
  }

}

