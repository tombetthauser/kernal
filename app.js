var t = (Math.random() * 500) + 500;
var a = [
	"https://tombetthauser.github.io/numbers/", 
	"https://tombetthauser.github.io/arthistory/", 
	"http://www.studioartsdirectory.com/feed.html"
	];
var l = (a.length) - 1;
var x = Math.round(Math.random() * l);
var ca = ["0","1","2","3","4","5","6"];
// var ca = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var nca = ["0","1","2","3","4","5","6"];
var cal = ca.length - 1;
var ncal = nca.length - 1;
var cs = "#";
var ker = Math.random()
var colorChance = .7;

if(ker <= colorChance){
	colors();
} else {
	notColors();
}

setTimeout(function(){
	window.location = a[x];
},t)

function colors(){
	setInterval(function(){
		cs = "#";
		ctf();
		cp();
		document.getElementById("bod").style.backgroundColor = cs;
		colors();
	}, ctf());
}

function notColors(){
	setInterval(function(){
		cs = "#";
		ctf();
		ncp();
		document.getElementById("bod").style.backgroundColor = cs;
		notColors();
	}, ctf());
}

function ctf(){
	var i = 0;
	i =+ Math.round(Math.random() * 100) + 25;
	return i;
}

function cp(){
	for(i=0;i<6;i++){
		var y = Math.round(Math.random() * cal)
		cs += ca[y];
	}
}

function ncp(){
	var y = Math.round(Math.random() * ncal)
	var z = Math.round(Math.random() * ncal)
	for(i=0;i<3;i++){
		cs += nca[y];
		cs += nca[z];
	}
}