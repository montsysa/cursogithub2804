function shooter(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){
		fill(105, 206, 241);
		ellipse(this.x, this.y, 20, 20)
	}

	this.move = function(){
		this.y = this.y - 5;
	}
}