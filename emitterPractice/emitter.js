var Emitter = require("events").EventEmitter;
var emitter = new Emitter();

emitter.setMaxListeners(20);
emitter.defaultMaxListeners(20);

emitter.on("teacher",function(){
	console.log("teacher came shant ho jao");
});

emitter.once("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????");
	emitter.removeAllListeners("lectureFinish")
});	
emitter.on("lectureFinish",function(){
	console.log("teacher went balle balee........")
});	

emitter.on("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????")
});	
emitter.on("lectureFinish",function(time){
	console.log("chutti",time,"bje hogi");
});	
emitter.once("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????");
	emitter.removeAllListeners("lectureFinish")
});	
emitter.on("lectureFinish",function(){
	console.log("teacher went balle balee........")
});	

emitter.on("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????")
});	
emitter.on("lectureFinish",function(time){
	console.log("chutti",time,"bje hogi");
});	
emitter.once("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????");
	emitter.removeAllListeners("lectureFinish")
});	
emitter.on("lectureFinish",function(){
	console.log("teacher went balle balee........")
});	

emitter.on("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????")
});	
emitter.on("lectureFinish",function(time){
	console.log("chutti",time,"bje hogi");
});	
emitter.once("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????");
	emitter.removeAllListeners("lectureFinish")
});	
emitter.on("lectureFinish",function(){
	console.log("teacher went balle balee........")
});	

emitter.on("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????")
});	
emitter.on("lectureFinish",function(time){
	console.log("chutti",time,"bje hogi");
});	
emitter.once("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????");
	emitter.removeAllListeners("lectureFinish")
});	
emitter.on("lectureFinish",function(){
	console.log("teacher went balle balee........")
});	

emitter.on("lectureFinish",function(){
	console.log("chutti kab hogiii.........?????")
});	
emitter.on("lectureFinish",function(time){
	console.log("chutti",time,"bje hogi");
});	

emitter.emit("teacher");
emitter.emit("lectureFinish");
emitter.emit("lectureFinsh");
emitter.emit("lectureFinsh");
emitter.emit("lectureFinsh");
emitter.emit("lectureFinsh");
emitter.emit("lectureFinish",5);







emitter.getMaxListeners()
