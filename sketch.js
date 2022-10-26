
let trees = [];

let zoom = 500000;
let zoomAmt = 10000;

var projection = d3
  .geoMercator()
  .center([8.3090, 47.0502])
  .translate([400, 400])
  .scale(zoom)

let zoomInButton;
let zoomOutButton;

function preload() {
  trees = loadJSON("trees.json");
}

function setup() {
  createCanvas(800, 800);

  zoomInButton = createButton('+');
  zoomInButton.position(20, 300);
  zoomInButton.mousePressed(zoomIn);
  // zoomInButton.style('width', '30px');
  // zoomInButton.style('height', '30px');
  zoomInButton.style('font-size', '30px');
  zoomInButton.style('background-color', 'orange');
  zoomInButton.style('border', '2px solid black');
  zoomInButton.style('border-radius', '5px');
  zoomInButton.style('cursor', 'pointer');

  // padding for the button
  zoomInButton.style('padding', '0px 7px 0px 7px');

  zoomOutButton = createButton('-');
  zoomOutButton.position(20, 350);
  zoomOutButton.mousePressed(zoomOut);

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


function zoomIn() {
  zoom += zoomAmt;
  projection.scale(zoom);
  redraw();
}

function zoomOut() {
  zoom -= zoomAmt;
  projection.scale(zoom);
  redraw();
}

