var base;
var blocks = [];
var shoots = [];
var yPosition = 0;

function setup() {
	createCanvas(600, 400);
	base = new breackout();
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
    base.show();
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
function keyPressed(){
	if(keyCode === UP_ARROW){
		var shoot = new shooter(base.x + 30, height-20);
		shoots.push(shoot);
	}
	if(keyCode === RIGHT_ARROW){
		base.move(1);
	}else if(keyCode === LEFT_ARROW){
		base.move(-1);
	}
}