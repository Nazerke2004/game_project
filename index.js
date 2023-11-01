let player1 = "Player1";
let player2 = "Player2";

function editNames() {
    player1 = prompt ("Change name of 1st Person")
    player2 = prompt ("Change name of 2nd person")

    if (player1.length < 1 || player2.length < 1) {
        alert ('Please write more than 1 letter');
        return;
    }
    
    
    document.querySelector("p.Player1")
    .innerHTML = player1;

    document.querySelector("p.Player2")
    .innerHTML = player2;
}

function rollTheDice(){
let diceNum1 = document.querySelector(".img1");
let diceNum2 = document.querySelector(".img2");

diceNum1.setAttribute("src", "diceroll.gif")
diceNum2.setAttribute("src", "diceroll.gif")

let result = document.querySelector("h1")
result.innerHTML = ""
setTimeout(() => {
let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

diceNum1.setAttribute('src', 'dice'+ randomNumber1 +'.png');
diceNum2.setAttribute('src', 'dice'+ randomNumber2 +'.png');



if( randomNumber1 === randomNumber2 ) {
    result.innerHTML = "Friendship wins"
} 
 else if( randomNumber1 > randomNumber2){
    result.innerHTML = (player1 + " " + "LOVES MOST!");
} 
else {
    result.innerHTML = (player2 + " " + "LOVES MOST!");
}
}, 2500); }

