class Box{
    constructor(x,y,width,height){

        var options = {
            restitution :1.0
        }
        this.w = width;
        this.h = height;

        this.body3 = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);


    }

    display(){
        var pos = this.body3.position;
        rectMode(CENTER);
        fill(155);
        rect(pos.x,pos.y,this.w,this.h);
    }
    

}