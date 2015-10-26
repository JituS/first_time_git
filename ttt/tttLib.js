var lib = {};
exports.lib = lib;
var chances = 0;
var player1 = "0",player2 = "X";

lib.getBoard = function(){
	var board = new Array(4).join("*").split("");
	board = board.map(function(each){
		return new Array(4).join(" ").split("");
	});
	return board;
};

lib.checkPosition = function(board,turn){
	var turn = turn.split("");
	if(turn.length==3 && +turn[0]<=2 && +turn[1]<=2){
		return board[turn[0]][turn[1]] == " ";
	}
	return false;
};

lib.checkWinner = function(board){
	if((board[0][0] == board[1][0] && board[1][0] == board[2][0])){
		console.log("win");
		process.exit();
	}
};

lib.writeTurn = function(board,turn,player){
	if(lib.checkPosition(board,turn) && chances<10){
		chances++;
		board[turn[0]][turn[1]] = (chances%2) ? player1 : player2;
		return board;
	}
	console.log("Please enter correct position");
	return board;
};

var boardDesign = function(board){
	var newBoard = board.map(function(each,i){
		return each.join("  |  ");
	});
	process.stdout.cursorTo(24,3);
	console.log(newBoard.join("\n\t\t\t==============\n\t\t\t"))
};


lib.showBoard = function(board,player){
	boardDesign(board);
	process.stdout.cursorTo(20,10);
	process.stdout.write(chances%2 ? "player X  ":"player 0  ")
};	

