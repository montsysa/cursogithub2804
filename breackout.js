function breackout(){
	this.x = width / 2 - 30;

	this.show = function(){
		fill(random(255));
		rect(this.x, height - 10, 60, 10)
	}

	this.move = function(dir){
		this.x += dir * 60;
	}
}