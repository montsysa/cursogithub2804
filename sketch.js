var base;
var blocks = [];
var shoots = [];
var yPosition = 0;

function setup() {
	createCanvas(600, 400);
	for(var i = 0; i <= 2; i++){
		blocks[i] = [];
		yPosition += 30;
		for(var j = 0; j <= 4; j++){
			blocks[i][j] = new block(j*80+100, yPosition);
		}
	}
}

function draw() {
	background(51);
	for(var i = 0; i < shoots.length; i++){
		shoots[i].show();
		shoots[i].move();
	}
	for(var i = 0; i <= 2; i++){
		for(var j = 0; j <= 4; j++){
			blocks[i][j].show();
		}
	}
}