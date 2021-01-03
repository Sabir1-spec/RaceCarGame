class Ground {
    constructor(x, y, width, height) {

        var options = {
            isStatic: true
        }
        
        this.w = width;
        this.h = height;

        this.body2 = Bodies.rectangle(x, y, width, height, options)
        World.add(world, that.body);
    }

        display() {
            var pos2 = this.body2.position;
            fill(100);
            rect(pos2.x, pos2.y, this.w, this.h);

        }

}