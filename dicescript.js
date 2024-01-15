let sp = true;
let scoreTxt = document.getElementById('score');
let rollTxt = document.getElementById('roll');
let winTxt = document.getElementById('wins');
let loseTxt = document.getElementById('losses');
let dicePic = document.getElementById('dicePic');

class player{ //player object class
    constructor(wins, score, roll, losses){
        this.wins = wins; //resets when you switch between 1p and 2p
        this.score = score; //resets each game
        this.roll = roll; //resets every turn
        this.losses = losses;
    }
}

let soloPlayer = new player(0,0,0,0);

function rollDice(){
    return Math.round(Math.random() * 5) + 1; //meant to generate num from 1-6
}

const multiplayerToggle = document.getElementById('multiplayer-toggle');

multiplayerToggle.addEventListener('click', togglePlayers => {
    if (sp){
        multiplayerToggle.textContent = "Multiplayer";
        sp = false;
    }
    else{
        multiplayerToggle.textContent = "Singleplayer";
        sp = true;
    }
});

const dice = document.getElementById('dice-roll');

dice.addEventListener('click', rollTheDice => {
    if(sp){ // single player
        soloPlayer.roll = rollDice(); //generate random number from 1 to 6
        dicePic.src=`img/d${soloPlayer.roll}.png`;
        dicePic.alt=`A dice with a ${soloPlayer.roll} on its face`;
        rollTxt.textContent = `Roll: ${soloPlayer.roll}`;
        checkRoll(soloPlayer);
        scoreTxt.textContent = `Score: ${soloPlayer.score}`;
    }
})

function checkRoll(person){
    if(person.roll == 1){ // if you roll a 1, you lost. move to next game
        person.losses += 1;
        person.score = 0; // lose all your points
        loseTxt.textContent = `Losses: ${person.losses}`;
    }
    else{ // if you roll anything other than a 1 just add that value to your score
        person.score += person.roll;
    }
    if(person.score>20){ // if score over 20, you win. add 1 more to win count and move to next game
        person.wins += 1;
        person.score = 0;
        winTxt.textContent = `Wins: ${person.wins}`;
    }
}



/*
//multiplayer. do not run. will crash your browser


let duoPlayer1 = new player(0,0,0,0);
let duoPlayer2 = new player(0,0,0,0);

while(playing && !sp){
    //reset variables
    roundCompleted = false;
    score = 0;

    while(!roundCompleted){
        // pl turn
        duoPlayer1.roll = rollDice();
        roundInfo = [duoPlayer1, roundCompleted];
        checkRoll(roundInfo);
        duoPlayer1.roll = checkRoll[0];
        if(checkRoll[1] == true){ // if p1 ended the game
            duoPlayer2.wins +=1;
            roundCompleted = true;
        }
        // p2 turn
        duoPlayer2.roll = rollDice();
        roundInfo = [duoPlayer2, roundCompleted];
    }
}
*/