class Player{
    constructor(){

        this.spot=0;
    }
    rollDice(){
       
        this.roll=Math.round(random(1,6));
        this.next=this.spot+this.roll;
    }
    isSorL(tiles){
        
       
        var tile=tiles[this.spot];
        if(tile.SorL!==0 && tile){
       return true;
        }else{
            return false;
        }
    }
    display(tiles){
        //console.log(this.spot);
      // console.log(tiles[this.spot]);
       var currentTile=tiles[this.spot];
       if(!currentTile) return;
      var pose= currentTile.getCentre();
     //s console.log(pose);
      ellipse(pose[0],pose[1],15,15);

    }
    reset(){
        this.spot=0;
        this.roll=-1;
        this.next=-1;
    }
    showEffect(tiles){
        var start=max(0,this.spot);
        var end=min(this.next,tiles.length-1);
        
        for(var i=start;i<=end;i++){
            tiles[i].highlight();
        }
    }
    move(){
        this.spot=this.next;
    }
    moveSorL(tiles){
        var tile=tiles[this.spot];
        if(tile){
         this.spot=this.spot+tile.SorL;

        }
       
    }
}