class Bob {

    constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitution:0.3,
        friction: 0.5,
        density: 1.2

    }
      this.x=x;
      this.y=y;
      this.radius=radius;
     //this.image = loadImage("paper.png");
   
     
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world,this.body);
     
    }
    display(){
        // alert('test');
        var bobpos=this.body.position;
        push();
        translate(bobpos.x,bobpos.y);
        //imageMode(rect);
       //rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,0);
      //image(this.image,0,0,this.radius,this.radius); 
       ellipse(0,0,this.radius,this.radius); 

        pop(); 
        }
    }