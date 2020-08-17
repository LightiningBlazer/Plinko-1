class Particle {
    constructor(x,y,radius){
        var options={
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.radius = radius;
    }
    display(){
        ellipseMode(RADIUS);
        fill(random(0,255),random(0,255),random(0,255));
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}