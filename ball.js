class ball{

    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':0.9,
            'density': 1.5,
            'body.frictionAir' :4
        }
        this.body = Bodies.circle(x, y,20, options);
        this.width = 20;
        this.height = 20;
        
       ballImg  = loadImage("pic/paper_ball.png");

        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
        
        var angle = this.body.angle;
        push();
        
        rotate(angle);
        ellipseMode(radius);
        fill("red");
        ellipse(pos.x, pos.y, 20);

        imageMode(CENTER);
        image(ballImg,0,0);


        pop();
      }



}