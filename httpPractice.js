var http = require("http");
var fs = require("fs");
var options = {
	host : "www.google.com",
	path : "/?gfe_rd=cr&ei=vUEqVvnrGoKW8QeKoZv4Cw"
};

var readedData = "";

var onRequest = function(res) {
	res.on("data",function(reading){
		readedData+=reading;
	});
	res.on("end",function(){
		fs.writeFileSync("./downloadedData",readedData);
	});
};

var error = function(error){
	console.log(error);
}


http.request(options,onRequest).on("error",error).end();

