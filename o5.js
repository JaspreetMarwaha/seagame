class o5 {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where obstacle will be created  
      this.ry = height-random([220,420,620]);   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("piranha",o5Animation);
      this.spt.scale=0.5;
      this.spt.velocityX=-2;
    }
  
}