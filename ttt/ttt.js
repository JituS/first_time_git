var lib = require("./tttLib.js").lib;
var axel = require("axel");
axel.clear();

process.stdin.setEncoding("utf8")

process.stdout.cursorTo(20,3);
var board = lib.getBoard();

process.stdin.on("readable",function(){
	axel.clear();
	var turn = process.stdin.read();
	if(turn!=null){
		board = lib.writeTurn(board,turn);
	};
	lib.showBoard(board);
});	



