function block(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){;
		fill(666, 1, 100);
		rect(this.x, this.y, 80, 30)
	}
}