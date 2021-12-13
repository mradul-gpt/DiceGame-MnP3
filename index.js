//Genrating Random Score

var score1=Math.floor(Math.random()*7);
var score2=Math.floor(Math.random()*7);

//Genrating Results

if(score1>score2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins !";
    document.getElementsByTagName("p")[0].innerHTML="Player 1 <img src='images/victory.png'>";
    var obj = document.getElementsByTagName("img")[0];
    obj.setAttribute("style", "height: 50px; position: relative; bottom: 5px;");
}
else if(score1===score2){
    document.getElementsByTagName("h1")[0].innerHTML="Its A Draw !";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins !";
    document.getElementsByTagName("p")[1].innerHTML="Player 2 <img src='images/victory.png'>";
    var obj = document.getElementsByTagName("img")[1];
    obj.setAttribute("style", "height: 50px; position: relative; bottom: 5px;");
}

//Changing Dice value

if(score1===1){
        document.getElementById("d1").src="images/dice1.png";
}
else if(score1===2){
    document.getElementById("d1").src="images/dice2.png";
}
else if(score1===3){
    document.getElementById("d1").src="images/dice3.png";
}
else if(score1===4){
    document.getElementById("d1").src="images/dice4.png";
}
else if(score1===5){
    document.getElementById("d1").src="images/dice5.png";
}
else if(score1===6){
    document.getElementById("d1").src="images/dice6.png";
}
else{}

if(score2===1){
    document.getElementById("d2").src="images/dice1.png";
}
else if(score2===2){
document.getElementById("d2").src="images/dice2.png";
}
else if(score2===3){
document.getElementById("d2").src="images/dice3.png";
}
else if(score2===4){
document.getElementById("d2").src="images/dice4.png";
}
else if(score2===5){
document.getElementById("d2").src="images/dice5.png";
}
else if(score2===6){
document.getElementById("d2").src="images/dice6.png";
}
else{}
