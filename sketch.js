const Rolls_state=1;
const Move_state=2;
const SorL_state=3;
var gameState=Rolls_state;


var tiles=[];
var player;
var games=[];
var index=0;
var displayAverage;


function setup() {
  createCanvas(400,400);
  games[index]=0
  var resolution=40;
  var rows=height/resolution;
  var columns=width/resolution;
  var direction=1;
  var x=0;
  var y=(rows-1)*resolution;
  displayAverage=createP("");
 


   for(var i=0;i<rows*columns;i++){
    var tile=new Tile(x,y,resolution,i,i+1);
    tiles.push(tile);
    x=x+resolution*direction
    //console.log(tile);
    if(x>=width|| x<0){
      direction=direction*(-1);
      y=y-resolution;
      x=x+resolution*direction;
    }
  }
  tiles[10].SorL=-8;
  tiles[5].SorL=7;
  tiles[8].SorL=-6;
  tiles[11].SorL=4

  player=new Player();
 // console.log(tiles);
}

function draw() {
  background(255,255,255);  
  frameRate(1);
 
  for(var tile of tiles){
    tile.show();
  }
  for(var tile of tiles){
    tile.showSorL(tiles);
  }
  if(gameState===Rolls_state){

  player.rollDice();
  games[index]++
  player.showEffect(tiles);
  gameState=Move_state
  }
 
  else if(gameState===Move_state){
    player.move();
    if(player.isSorL){
      gameState=SorL_state;
    }else{
      gameState=Rolls_state;
    }
    

    
  }
  else if(gameState===SorL_state){
    player.moveSorL(tiles);
    gameState=Rolls_state;
  }
  player.display(tiles);
  var gameOver=false;
 

  if(player.spot>=tiles.length-1){
    player.spot=tiles.length-1;
    //console.log("game over")
    gameOver=true;
  }
  if(gameOver){
    player.reset();
    index++;
    games[index]=0;
   
  }
  var average=0
  var sum=0
  for(var i=0; i<games.length;i++){
    sum=sum+games[i];
    
  }
  average=sum/games.length;
  displayAverage.html(average);
  

  

 
 
 
}