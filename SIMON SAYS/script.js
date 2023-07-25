/*let seq = [], player = [];
let color = ['red','blue','yellow','green'];
let speed = 500;
let lvl = 1;

const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");

function start(){
    document.getElementById('state').style.backgroundColor = 'green';
    /*flashRed();
    flashBlue();
    flashYellow();
    flashGreen();
    var simon = Math.floor(Math.random()*4);
    flashCol(color[simon]);
    seq.push[simon];
    document.getElementById('score').innerHTML = '01';
}*/

//seq[] is computer sequence; player[] is player sequence
let seq = [], player = [];
/**-flash is the index of seq in which we are currently on;
    -round is the current level of the game we're on;
    -good checks if the player has matched a given flash
    -comp is used to indicate the programs turn to flash the next set of lights
    -gap sets the interval between light flashes
    -kill5 termiantes the game if button isn't pressed within 5 secs
    -on allows the player to click the buttons
    -speed is used to set the flash of buttons
*/ 
let flash, round, good, comp, gap, kill5;
let on = false;
let color = ['red','blue','yellow','green'];
let speed = 700;
let score = 0;
let high = 0;

//getting html elements using querySelector
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const scoreCounter = document.querySelector("#score");
const startButton = document.querySelector("#start");
const highScore = document.querySelector("#high-score");
const state = document.querySelector("#state"); 

//starts the game when start button is clicked
//calls play function
startButton.addEventListener('click', (event)=>{
    clearInterval(gap);
    play();
})

//play function to start game
function play(){
    //initializing variables from above
    //changing red dot under start button to green
    document.getElementById('state').style.backgroundColor = 'green';
    seq = [];
    player = [];
    flash = 0;
    gap = 0;
    round = 1;
    scoreCounter.innerHTML = score.toString().padStart(2, '0');
    good = true;
    speed = 700;

    //fills the seq[] array with random numbers between 0 and 3 to determine the sequence of flahses the player must match
    for(i=0; i<99; i++){
        seq.push(Math.floor(Math.random()*4));
    }
    //program turn to flash game
    comp = true;

    gap = setInterval(gameTurn, 800);
}

//runs both player and program gameplay
function gameTurn(){
    //blocks player from pressing buttons before the program has finished flashing the lights for the certain level
    on = false;

    //checks if the program has flashed all the lights for the current round
    if(flash == round){
        //stops the program from flashing and allows the user press buttons
        clearInterval(gap);
        comp = false;
        on = true;
    }

    /**if it is computer's turn to flash, 
     * check the seq[] array for index of flash,
     * flash color as appropriate to index of color array,
     * increment flash,
     * goes back and checks the if-statement above, then return to this  
    */
    if(comp){
        setTimeout(() => {
            if(seq[flash] == 0){
                flashCol(color[0]);
            } 
            if(seq[flash] == 1){
                flashCol(color[1]);
            } 
            if(seq[flash] == 2){
                flashCol(color[2]);
            } 
            if(seq[flash] == 3){
                flashCol(color[3]);
            } 
            flash++;
        }, 200);
    }

    //set 5 seconds timer for player to repeat sequence
    if(on){
        kill5 = setInterval(end, 5000);
    }

}

//general flash
function flashCol(x){
    if(x =='red'){
        flashRed();
    }
    else if(x == 'blue'){
        flashBlue();
    }
    else if(x == 'green'){
        flashGreen();
    }
    else{
        flashYellow();
    }
}

//flashRed
function flashRed(){
    document.getElementById('red').style.backgroundColor = 'red';
    setTimeout(setRed, speed);
}
function setRed(){
    document.getElementById('red').style.backgroundColor = '';
}


//flashBlue
function flashBlue(){
    document.getElementById('blue').style.backgroundColor = '#0096FF';
    setTimeout(setBlue, speed);
}
function setBlue(){
    document.getElementById('blue').style.backgroundColor = '';
}

//flashYellow
function flashYellow(){
    document.getElementById('yellow').style.backgroundColor = 'yellow';
    setTimeout(setYellow, speed);
}
function setYellow(){
    document.getElementById('yellow').style.backgroundColor = '';
}

//flashGreen
function flashGreen(){
    document.getElementById('green').style.backgroundColor = 'lime';
    setTimeout(setGreen, speed);
}
function setGreen(){
    document.getElementById('green').style.backgroundColor = '';
}


//checks if red button has been clicked and calls check function to validate it
red.addEventListener('click', (event)=>{
    if(on){
        clearInterval(gap);
        player.push(0);
        flashCol(color[0]);
        check();
    }
})

//checks if blue button has been clicked and calls check function to validate it
blue.addEventListener('click', (event)=>{
    if(on){
        clearInterval(gap);
        player.push(1);
        flashCol(color[1]);
        check();
    }
})

//checks if yellow button has been clicked and calls check function to validate it
yellow.addEventListener('click', (event)=>{
    if(on){
        clearInterval(gap);
        player.push(2);
        flashCol(color[2]);
        check();
    }
})

//checks if green button has been clicked and calls check function to validate it
green.addEventListener('click', (event)=>{
    if(on){
        clearInterval(gap);
        player.push(3);
        flashCol(color[3]);
        check();
    }
})

/**
 * checks:
 * -if player clicked wrong color
 * -if we are on the 5th, 9th or 13th round to increase flash speed
 * -if player successfully repeated sequence to move to the next round
 */
function check(){
    //checks if player clicked wrong button
    if(player[player.length-1] != seq[player.length -1]){
        good = false;
        on = false;
    }
    //increases flash speed past these rounds
    if(player.length == 5){
        speed = speed-150;
    }
    if(player.length == 9){
        speed = speed-150;
    }
    if(player.length == 13){
        speed = speed-150;
    }
    //end game if player clicks wrong button
    if(good == false){
        clearInterval(kill5);
        end();
    }
    //if player successfully repeats sequence, increment variables and move onto next round
    if(round == player.length && good){
        clearInterval(kill5);
        round++;
        score++;
        player = [];
        comp = true;
        flash = 0;
        scoreCounter.innerHTML = score.toString().padStart(2, '0');
        if(score > high){
            high = score;
            highScore.innerHTML = high.toString().padStart(2, '0');
        }
        gap = setInterval(gameTurn, 800);
    }
}

//function to end game
function end(){
    on = false;
    //flashing 5 times(i tried loops and setTieout and setInterval but couldn't get it to work right and then i got tired and settled for this)
    //first flash
    flashRed();
    flashBlue();
    flashYellow();
    flashGreen();
    //second flash
    setTimeout(flashRed, speed*2);
    setTimeout(flashBlue, speed*2);
    setTimeout(flashYellow, speed*2);
    setTimeout(flashGreen, speed*2);
    //third flash
    setTimeout(flashRed, speed*4);
    setTimeout(flashBlue, speed*4);
    setTimeout(flashYellow, speed*4);
    setTimeout(flashGreen, speed*4);
    //fourth flash
    setTimeout(flashRed, speed*6);
    setTimeout(flashBlue, speed*6);
    setTimeout(flashYellow, speed*6);
    setTimeout(flashGreen, speed*6);
    //fifth flash
    setTimeout(flashRed, speed*8);
    setTimeout(flashBlue, speed*8);
    setTimeout(flashYellow, speed*8);
    setTimeout(flashGreen, speed*8);

    //reset score counter and redButton and clear kill5 interval
    scoreCounter.innerHTML = '00';
    state.style.backgroundColor = 'red';
    score = 1;
    clearInterval(kill5);
}