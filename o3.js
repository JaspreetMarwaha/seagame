class o3 {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where obstacle will be created  
      this.ry = height-random([220,420,620]);   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("lionfish",o3Animation);
      this.spt.scale=0.5;
      this.spt.velocityX=-2;
    }
  
}