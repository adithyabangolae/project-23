class Box {

constructor(x,y,width, height) {



   var options = {
   
    'density':1.0,
    'friction':0.1

   }
   this.body = Bodies.rectangle(x,y,width, height, options);
   this.width = width;
   this.height = height;

   World.add(world, this.body)

    }
    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4)
        stroke("green");
        rectMode(CENTER);
        fill(255)
        rect(0,0,this,this.width,this.height);
        pop();

    }

}