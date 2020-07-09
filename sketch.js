var canvas, database;
var gameState=0,backgrounImg,playerCount=0,form,player,game,allPlayers,
cars,car1,car2,car3,car4;


function setup(){
  database = firebase.database();
  canvas=createCanvas(displayWidth-20,displayHeight-30);
game= new Game();
game.getState();
game.start();

}
 

function draw(){
if (playerCount===4){
  game.update(1)

}

if(gameState===1){
clear();
game.play();

}


  
}
