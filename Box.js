class Box {

    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        var options = { restitution: 0.8 }
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);

        console.log(this.body);
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        rect( 0,0 ,this.width ,this.height );
        pop(); //rotate and translate  ends
        

    }

}