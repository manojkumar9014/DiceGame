var randomNumber1 = Math.floor((Math.random()*6));
 var randomDiceImage = "dice"+randomNumber1+".png";
 var randomDiceImageSource = "images/" + randomDiceImage;

var img1 = document.querySelectorAll('img')[0];
img1.setAttribute('src',  randomDiceImageSource);


var randomNumber2 = Math.floor((Math.random()*5)+1);
 var randomDiceImage = "dice"+ randomNumber2 + ".png";
 var randomDiceImageSource = "images/" + randomDiceImage;

var img2 = document.querySelectorAll('img')[1];
img2.setAttribute('src',  randomDiceImageSource);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wons";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wons";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
