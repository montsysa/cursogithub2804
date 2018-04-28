function shooter(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){
		fill(360, 0, 0);
		ellipse(this.x, this.y, 20, 20)
	}

	this.move = function(){
		this.y = this.y - 5;
	}
}