class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        stroke("yellow")
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}