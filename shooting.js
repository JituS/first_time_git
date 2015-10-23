var axel = require("axel")
axel.clear();
var keypress = require("keypress");
var dartCordinate = {x:0,y:0,inc:0};
var arrowCordinate = {x:130,y:20,inc:0},score=0;
axel.bg(11,155,19);
axel.fg(0,0,0);

var createEnv = function (){
	axel.clear();
	process.stdout.cursorTo(130,2);
	console.log("Score: ",score);
	process.stdout.write(createArrow(arrowCordinate.x,arrowCordinate.y));
	if(dartCordinate.y == 25){
		dartCordinate.y=0,dartCordinate.inc=dartCordinate.inc+1;	
		if(dartCordinate.inc == 10) process.exit(0);
	} 
	process.stdout.cursorTo(dartCordinate.x,dartCordinate.y);
	var dart = new Array(10).join("**||\n");
	return dart;
};

var createArrow = function(x,y){
	if(arrowCordinate.y >= dartCordinate.y && arrowCordinate.y <= dartCordinate.y + 10 && x == 3){
		score++;
	};
	var arrow = "<" + new Array(5).join("=");
	process.stdout.cursorTo(x,y);
	return arrow;
};

var moveDart = function(dart){
	var moving = setInterval(function(){
		var newDart = createEnv(dartCordinate.x,dartCordinate.y++);
		process.stdout.write(newDart);
	},100);
}

keypress(process.stdin);

var newArrow1 = function(x,y){
	var a = setInterval(function(){
		arrowCordinate.x--,arrowCordinate.y;
		if(arrowCordinate.x == 2){
			arrowCordinate = {x:130,y:20};
			clearInterval(a);			
		}
		process.stdout.write(createArrow(arrowCordinate.x,arrowCordinate.y));
	},9);
}

var moveArrow = function(){
	var newArrow = newArrow1(arrowCordinate.x--,arrowCordinate.y);
};

process.stdin.on("keypress",function(ch,key){
	if(key.name == "up" && arrowCordinate.x == 130 && arrowCordinate.y == 20) moveArrow();
	if(key.name == "c") process.exit();
});

var start = function(){
	var dart = createEnv();
	moveDart(dart);
};

start();
process.stdin.setRawMode(true);
process.stdin.resume();
