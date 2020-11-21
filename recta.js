class recta{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(705,610,20,100,options);
        this.body = Bodies.rectangle(705,670,60,20,options);
        this.body = Bodies.rectangle(785,610,20,100,options);
       
        this.image = loadImage("pic/bin.png");
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("0");
        rect(pos.x, pos.y, this.width, this.height);

      

      }



}