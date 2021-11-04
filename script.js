let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let startBtn = document.querySelector('#start-btn');
let restartBtn = document.querySelector('.btn-restart')
let splashScreen = document.querySelector('#splashScreen')
let gameOver = document.querySelector('#game-over');
canvas.style.border = '2px solid black';
canvas.style.backgroundImage = 'images/sky.png'


//load all the images
let charac = new Image();
charac.src = 'images/character.png';

let dragon = new Image();
dragon.src = 'images/dragon1.png';

let cloudVer = new Image();
cloudVer.src = 'images/cloudvertical.png';

let pipeSouth = new Image();
pipeSouth.src = 'images/pipeSouth.png';

let bg = new Image();
bg.src = 'images/sky.png'

let pipeOne = new Image();
pipeOne.src = 'images/pipeOne.png';

let pipeTwo = new Image();
pipeTwo.src = 'images/pipeTwo.png';

let pipeThree = new Image();
pipeThree.src = 'images/pipeThree.png';

let pipeFour = new Image();
pipeFour.src = 'images/pipeFour.png';

// variables
let intervalId = 0;
let isGameOver = false;
let pipeY = 450;
let decPipe = 2;
let pipeX = 10
let isLeft = false
let isRight = false
let isUp = false
let characX = 400     
let characY = 600
let characW = 40
let characH = 40
let pipeWidth = 55 
let score = 0
let dragonX = 200
let dragonY = 80
let dragonW = 200
let dragonH = 120
let audio = new Audio('audio/EasyPeasy.wav')
let soundEffect = new Audio('audio/cartoon.mp3')

// new array for pipes
let pipes = [
    {x: 400, y: characY + characH},
    {x: 650, y: 450},
    {x: 1000, y: 500},
    {x: 1300, y: 600},
    {x: 1600, y: 550},
    {x: 1800, y: 600},
    {x: 2000, y: 500},
   ]

// new array for dragon
let drag = [
    {x: 1550, y:650},
    {x: 1850, y:400},
    {x: 2550, y:150},
    {x: 3250, y:250},
    ]

// all the functions
function draw(){
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(cloudVer, 0, 0)
    ctx.font = '30px Verdana'
    ctx.fillText(`Score: ${score}`, 20, canvas.height - 700)
    ctx.drawImage(charac, characX, characY, characW, characH)
    
    characY += 3

    if (isRight == true){
        characX += 2   
    }
    if (isUp == true){
        characY -= 5   
    }
    
    // for loop - pipes 
    for (let i=0; i<pipes.length; i ++){
        ctx.drawImage(pipeSouth, pipes[i].x, pipes[i].y)
        
        pipes[i].x = pipes[i].x -2
       
        // collision - pipes
        if(characY + characH >= pipes[i].y && 
           characX + characW <= pipes[i].x + pipeWidth + 10 &&
           characX >= pipes[i].x - 40 &&
           characY + characH <= pipes[i].y + 40 ){
               characY = pipes[i].y - characH 
               

        characX = characX -2           
    }

        // random pipes
        if (pipes[i].x + pipeSouth.width < 0){
            pipes[i].x = 1900 
    }
        if (pipes[i].x == 0){
            score++
    }
}
     // for loop - dragon
     for (i = 0; i < drag.length; i++){
        ctx.drawImage(dragon, drag[i].x, drag[i].y, dragonW, dragonH)
         drag[i].x = drag[i].x -5

         // collision - dragon
         if (characY <= drag[i].y + dragonH &&
            characY + characH >= drag[i].y &&
            characX + characW >= drag[i].x &&
            characX + characW <= drag[i].x + dragonW){
                isGameOver = true
    }
             
         // random - dragon
         if (drag[i].x + dragonW < 0){
            drag[i].y = Math.floor(Math.random() * (canvas.height))
            drag[i].x = Math.floor(Math.random() * (canvas.width/2) + canvas.width)

     }
}
        // when the monster falls, game over
        if (characY >= canvas.height) {
            isGameOver = true
        }
            
        
        if (isGameOver){
            cancelAnimationFrame(intervalId)
            gameOver.style.display = 'block' 
            canvas.style.display = 'none'
            audio.pause()
            audio.currentTime = 0
            soundEffect.play()
            soundEffect.volume = 0.02
            
        }
        else {
        intervalId = requestAnimationFrame(draw)
        }
}

function animation(){
    draw()
}

function handleStart(){
    startBtn.style.display = 'none';
    canvas.style.display = 'block';
    gameOver = document.querySelector('#game-over');
    gameOver.style.display = 'none'
    animation()
    audio.play()
    audio.volume = 0.02
    audio.loop = true
}


// addEventListener
document.addEventListener('keydown', (event) => {
    
    if (event.key == 'ArrowLeft') {
        isLeft = true;
        isRight = false;
        characX -= 6
    }

    if (event.key == 'ArrowRight') {
        isRight = true
        isLeft = false
        characX += 6      
    }

    if (event.key == ' '){     
        isUp = true;       
    }
})

document.addEventListener('keyup', () => {
    isLeft = false;
    isRight = false;
    isUp = false 
})
    
startBtn.addEventListener('click', () => {
    splashScreen.style.display    = 'none';
    canvas.style.display = 'block';
    handleStart()
})

restartBtn.addEventListener('click', () => {
    canvas.style.display = 'block'
    score = 0
    isGameOver = false
    characX = 400     
    characY = 600
    pipes = [
        {x: 400, y: characY + characH},
        {x: 650, y: 450},
        {x: 1000, y: 500},
        {x: 1300, y: 600},
        {x: 1600, y: 550},
        {x: 1800, y: 600},
        {x: 2000, y: 500},
       ]
    handleStart()

})

window.addEventListener('load', () => {
    canvas.style.display = 'none';
    gameOver.style.display = 'none';

})

