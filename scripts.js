{ //the game itself
	var size = 4;
	var min = 0;
	var max = size - 1;
	
	var isMoved = false;
	var score = 0;
	
	var excludeIds = [];

	function load() {
		//alert("load");
		//Load the table
		var html = '<table border="1">';
		for(var row=0;row<size;row++) {
			html += '<tr>';
			for(var col=0;col<size;col++) {
				var id = row+""+col;
				html += '<td align="center" valign="center" height="40" width="40" id="'+id+'"></td>';
			}
			html += '</tr>';
		}
		html += '</table>';
		//alert(html);
		document.getElementById("canvas").innerHTML = html;

		var id1 = getId();
		var id2 = "";
		while(true) {
			id2 = getId();
			if(id1 != id2)
			break;
		}
		//Set initial 2 values
		document.getElementById(id1).innerHTML = "2";
		document.getElementById(id2).innerHTML = "2";

		document.getElementById(id1).style.backgroundColor = getColor(2);
		document.getElementById(id2).style.backgroundColor = getColor(2);
		
		score = 0;
		document.getElementById("score").innerHTML = score;

		return false;
	}
	function getRandom()
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	function getId()
	{
		var i = getRandom();
		var j = getRandom();
		return i+""+j;
	}
	function up() {
		isMoved = false;
		excludeIds = [];
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=max;i++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveUp(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveUp(id) {		
		if(!id.startsWith(min)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(i-1);k>=min;k--) {
				var nId = k+""+j;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById((k+1)+""+j).innerHTML = "";
							document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
					document.getElementById((k+1)+""+j).innerHTML = "";
					document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function left() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveLeft(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveLeft(id) {
		if(!id.endsWith(min)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(j-1);k>=min;k--) {
				var nId = i+""+k;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById(i+""+(k+1)).innerHTML = "";
							document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
					document.getElementById(i+""+(k+1)).innerHTML = "";
					document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function down() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var id = j+""+i;
				if(document.getElementById(id).innerHTML != "") {
					moveDown(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveDown(id) {
		if(!id.startsWith(max)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(i+1);k<=max;k++) {
				var nId = k+""+j;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById((k-1)+""+j).innerHTML = "";
							document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
					document.getElementById((k-1)+""+j).innerHTML = "";
					document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function right() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveRight(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveRight(id) {
		if(!id.endsWith(max)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(j+1);k<=max;k++) {
				var nId = i+""+k;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById(i+""+(k-1)).innerHTML = "";
							document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
					document.getElementById(i+""+(k-1)).innerHTML = "";
					document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function update() {		
		//Add new value
		var ids = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML == "") {
					ids.push(id);
				}
			}
		}
		var id = ids[Math.floor(Math.random()*ids.length)];
		document.getElementById(id).innerHTML = "2";
		document.getElementById(id).style.backgroundColor = getColor(2);

		//Check if no move space available
		var allFilled = true;
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML == "") {
					allFilled = false;
					break;
				}
			}
		}		
		//Update score
		document.getElementById("score").innerHTML = score;
		if(allFilled) {
			checkGameOver();
		}
	}

	function checkGameOver() {
		var isOver = true;
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=(max-1);i++) {
				//alert(i+" "+j);
				var val = parseInt(document.getElementById(i+""+j).innerHTML);
				var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
				if(val == nVal) {
					isOver = false;
					break;
				}
			}
		}		
		if(isOver == true) {
			for(var i=min;i<=max;i++) {
				for(var j=min;j<=(max-1);j++) {
					//alert(i+" "+j);
					var val = parseInt(document.getElementById(i+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
					if(val == nVal) {
						isOver = false;
						break;
					}
				}
			}
		}
		if(isOver) {
			alert("Game over!");
		}
		return false;
	}
	function getColor(val)
	{
		var color = "#ffffff";
		switch(val) {
			case 2:		color = "#F6CED8"; break;
			case 4:		color = "#F7BE81"; break;
			case 8:		color = "#F3F781"; break;
			case 16:	color = "#BEF781"; break;
			case 32:	color = "#81F7D8"; break;
			case 64:	color = "#58D3F7"; break;
			case 128:	color = "#FA58F4"; break;
			case 256:	color = "#A901DB"; break;
			case 512:	color = "#01DF3A"; break;
			case 1024:	color = "#D7DF01"; break;
			case 2048:	color = "#D7DF01"; break;
			default:	color = "#ffffff";
		}
		return color;
	}
	if ( typeof String.prototype.startsWith != 'function' ) {
	  String.prototype.startsWith = function( str ) {
		return this.substring( 0, str.length ) === str;
	  }
	};
	if ( typeof String.prototype.endsWith != 'function' ) {
	  String.prototype.endsWith = function( str ) {
		return this.substring( this.length - str.length, this.length ) === str;
	  }
	};
	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37:
				left();
				break;
			case 38:
				up();
				break;
			case 39:
				right();
				break;
			case 40:
				down();
				break;
		}
	};
	//calling load method
	load();
  //-->
}


var AIActive = false;
var tpt = 100;
var AIButton = document.getElementById("AIStartStop");
var AIResults = [[[]]];
var chance = [0.25, 0.25, 0.25, 0.25];
var start = [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]];
var AIisMoved = false;
var AIscore = 0;
var AIexcludeIds = [];
var AIRun = 0;
var AITimer = 0;

{//AI wants to play too
	function AIup() {
	AIisMoved = false;
	AIexcludeIds = [];
	for(var j=min;j<=max;j++) {
		for(var i=min;i<=max;i++) {
			if(game[i][j] != "") {
				AImoveUp(i, j);
			}
		}
	}
	if(AIisMoved == true) {
		AIupdate(0);
	}
	return false;
}
function AImoveUp(i, j) {		
	if(i != min) {
		for(var k=(i-1);k>=min;k--) {
			if(game[k][j] != "") {
				var val = game[k+1][j];
				var nVal = game[k][j];
				if(val == nVal) {
					if(AIexcludeIds.indexOf(k+""+j) == -1){
						AIexcludeIds.push(k+""+j);
						game[k][j] = (val+nVal);
						game[k+1][j];
						AIisMoved = true;
						AIscore += (val+nVal);
					}
					break;
				}
			}
			else {
				game[k][j] = game[k+1][j];
				game[k+1][j] = "";
				AIisMoved = true;
			}
		}
	}
	return false;
}
function AIleft() {
	AIisMoved = false;
	AIexcludeIds = [];
	for(var i=min;i<=max;i++) {
		for(var j=min;j<=max;j++) {
			var id = i+""+j;
			if(game[i][j] != "") {
				AImoveLeft(i, j);
			}
		}
	}
	if(AIisMoved == true) {
		AIupdate(2);
	}
	return false;
}
function AImoveLeft(id) {
	if(j != min) {
		for(var k=(j-1);k>=min;k--) {
			if(game[i][k] != "") {
				var val = game[i][k+1];
				var nVal = game[i][k];
				if(val == nVal) {
					if(AIexcludeIds.indexOf(i+""+k) == -1){
						AIexcludeIds.push(i+""+k);
						game[i][k] = (val+nVal);
						game[i][k+1] = "";
						AIisMoved = true;
						AIscore += (val+nVal);
					}
					break;
				}
			}
			else {
				game[i][k] = game[i][k+1];
				game[i][k+1] = "";
				AIisMoved = true;
			}
		}
	}
	return false;
}
function AIdown() {
	AIisMoved = false;
	AIexcludeIds = [];
	for(var i=min;i<=max;i++) {
		for(var j=max;j>=min;j--) {
			if(game[i][j] != "") {
				AImoveDown(i, j);
			}
		}
	}
	if(AIisMoved == true) {
		AIupdate(1);
	}
	return false;
}
function AImoveDown(id) {
	if(i != max) {
		for(var k=(i+1);k<=max;k++) {
			if(game[k][j] != "") {
				var val = game[k-1][j];
				var nVal = game[k][j];
				if(val == nVal) {
					if(AIexcludeIds.indexOf(k+""+j) == -1){
						AIexcludeIds.push(k+""+j);
						game[k][j];
						game[k-1][j];
						AIisMoved = true;
						AIscore += (val+nVal);
					}
					break;
				}
			}
			else {
				game[k][j] = game[k-1][j];
				game[k-1][j] = "";
				AIisMoved = true;
			}
		}
	}
	return false;
}
function AIright() {
	AIisMoved = false;
	AIexcludeIds = [];
	for(var i=min;i<=max;i++) {
		for(var j=max;j>=min;j--) {
			if(game[i][j] != "") {
				AImoveRight(i, j);
			}
		}
	}
	if(AIisMoved == true) {
		AIupdate(3);
	}
	return false;
}
function AImoveRight(id) {
	if(!id.endsWith(max)) {
		for(var k=(j+1);k<=max;k++) 
			if(game[i][k] != "") {
				var val = game[i][k-1];
				var nVal = game[i][k];
				if(val == nVal) {
					if(AIexcludeIds.indexOf(i+""+k) == -1){
						AIexcludeIds.push(i+""+k);
						game[i][k] = (val+nVal);
						game[i][k-1];
						AIisMoved = true;
						AIscore += (val+nVal);
					}
					break;
				}
			}
			else {
				game[i][k] = dgame[i][k-1];
				game[i][k-1];
				AIisMoved = true;
			}
		}
	return false;
	}
	function AIupdate(direction) {		
		//Add new value
		var ids = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				if(game[i][j] == "") {
					ids.push(i+""+j);
				}
			}
		}
		var id = ids[Math.floor(Math.random()*ids.length)];
		var lol = id.split('');
		game[lol[0]][lol[1]] = "2";

		//Check if no move space available
		var allFilled = true;
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				if(game[i][j] == "") {
					allFilled = false;
					break;
				}
			}
		}
		if(allFilled) {
			AIcheckGameOver();
		}
		AIResults[AIRun][0].push(direction);
	}
function AIcheckGameOver() {
		var isOver = true;
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=(max-1);i++) {
				//alert(i+" "+j);
				var val = game[i][j];
				var nVal = game[i+1][j];
				if(val == nVal) {
					isOver = false;
					break;
				}
			}
		}		
		if(isOver == true) {
			for(var i=min;i<=max;i++) {
				for(var j=min;j<=(max-1);j++) {
					//alert(i+" "+j);
					var val = game[i][j];
					var nVal = game[i][j+1];
					if(val == nVal) {
						isOver = false;
						break;
					}
				}
			}
		}
		if(isOver == true){
			AIResults[AIRun].push(AIscore, AITimer);
		}
	}
}
{//tpt
var Warning = document.getElementById("Warning");
var h = new Date();
function ready() {
	document.getElementById("tptShow").firstChild.data = tpt;
}

function TPTChange(value) {
	tpt += value;
	if(tpt <= 0)
		tpt = 1;
	if(tpt >= 1000000)
		Warning.innerHTML = "Are you serious? Well, it's your time";
	else if (tpt <= 1000000)
		Warning.innerHTML = "";
	ready();
}
}
function AIButtonPress() {
	if(AIActive == false) {
		AIActive = true;
		AIButton.firstChild.data = "Stop AI";
		setTimeout(AIRunNow(), 1000);
	}
	else {
		AIActive = false;
		AIButton.firstChild.data = "Start AI";
	}
}

function getStart() {
	start = [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]];
	for (r = min; r <= max; r++) {
		for (c = min; c <= max; c++) {
			id = r+""+c;
			start[r][c] = document.getElementById(id).innerHTML;
		}
	}
}

function AIRunNow() {
	if(AIActive == true) { //If I change this to a while - loop, nothing happens on the site and chrome tells me "site not responding"
		var n = h.getTime();
		var j = h.getTime();
		
		
		//AI();              //If I call this function, nothing happens on the site and chrome tells me "site not responding"
		
		var difference = h.getTime() - j;
		document.getElementById("turnInfo").innerHTML = "Average time per turn: " + difference + " milliseconds";
	}
}

function AI() {
	getStart();
	AIRun = 0;
	for(e = 0; e <= tpt; e++){
		AITimer = 0;
		AIRun++;
		var game = start;
		//randomly change the temporary chances a bit and select a Move
		var tmpchance = chance;
		for(g = 0; g < 4; g++) {
			var value = tmpchance[g] / 10;
			if(Math.random() <= 0.5){
				tmpchance[g] -= value;
				for (h = 0; h < 4; h++) {
					if(h = g){continue}
					else{tmpchance[h] += value / 3; } 
				}
			}
			else{
				tmpchance[g] += value;
				for (h = 0; h < 4; h++) {
					if(h = g){}
					else{tmpchance[h] -= value / 3; } 
				}
			}
		}
		var Random = Math.random();
		if(Random >= 0 && Random <= tmpchance[0]) {AIup();}
		if(Random >= tmpchance[0] && Random <= tmpchance[1]) {AIdown();}
		if(Random >= tmpchance[1] && Random <= tmpchance[2]) {AIleft();}
		if(Random >= tmpchance[2] && Random <= tmpchance[3]) {AIright();}
	}
	//analyse the AITurns and change chances
	var newChance = [0, 0, 0, 0];
	for(e = 0; e < AIResults.length; e++) {
		for(f = 0; f < AIResults[e][2]; f++) {
			newChance[AIResults[e][0][f]]++;
		}
		Warning.innerHTML = newChance;
	}
}

/* 
Up - Down - Left - Right (chances, arguments given to AIUpdate(direction);


*/