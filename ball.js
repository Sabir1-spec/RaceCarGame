class Ball {
    constructor (x,y,width,height) {
            var options = {
                    isStatic: false

            }
            this.w = width;
            this.h = height;

            this.body = Bodies.ellipse(x,y,height,width,options);
            World.add(world,this.body);

        }
        
    display(){

        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(50);
        ellipse(pos.x,pos.y,this.w,this.h);

    }

    
}