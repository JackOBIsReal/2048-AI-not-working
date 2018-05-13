<!DOCTYPE html>
<html>
 <head>
  <title> Javascript : 2048 puzzle</title>
  <link rel='stylesheet' type='text/css' href='style.css'>
  <script src='scripts.js'></script>
 </head>
 <body onload='ready()'>
	<center>
	<a style="cursor: pointer; padding-left: 10%;" onclick="return load();">new game</a>
	<div id="canvas"></div>	
	<h2>Score : <div style="display:inline;" id="score"></div></h2>
	<b>HOW TO PLAY:</b> Use your arrow keys to move the tiles or let the AI have fun.<br><br><br>A bigger Number will result in a better AI, but it will also increase the time needed
	for each operation and thus also increase the time you have to wait.<br><br>
	<div id='ChageAIRate'>
		<button id='-100000' onclick='TPTChange(-100000)'>-100000</button>
		<button id='-10000' onclick='TPTChange(-10000)'>-10000</button>
		<button id='-1000' onclick='TPTChange(-1000)'>-1000</button>
		<button id='-100' onclick='TPTChange(-100)'>-100</button>
		<button id='-10' onclick='TPTChange(-10)'>-10</button>
		<p id='tptShow'>When you see this, you have Javascript disabled on your Browser. That means that this page is not going to work. Please enable Javascript.</p>
		<button id='10' onclick='TPTChange(10)'>+10</button>
		<button id='100' onclick='TPTChange(100)'>+100</button>
		<button id='1000' onclick='TPTChange(1000)'>+1000</button>
		<button id='10000' onclick='TPTChange(10000)'>+10000</button>
		<button id='100000' onclick='TPTChange(100000)'>+100000</button><br><br>
	<button id='AIStartStop' onclick='AIButtonPress()'>Start AI</button>
		<p id='Warning'></p>
		<p id='turnInfo'></p>
	</div>
	</center>
	<script src='scripts.js'></script>
 </body>
</html>