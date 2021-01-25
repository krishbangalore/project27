class rope{
    constructor(body1,body2,offsetX,offsetY){
        //alert('1');
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            length: 10,
            stiffness:0.04
        }
  //      alert(this.offsetX);
    //    alert('1.1');
     this.rope = Constraint.create(options);
      //alert('1.2');
     World.add(world,this.rope);
     //alert('2');
    }
 display(){
    //alert('3');
 var pointA = this.rope.bodyA.position
 var pointB = this.rope.bodyB.position
 
strokeWeight(2);
var Anchor1X = pointA.x;
var Anchor1Y = pointA.y;

var Anchor2X = pointB.x+this.offsetX;
var Anchor2Y = pointB.y+this.offsetY;
//line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

line(pointA.x,pointA.y - 35,(pointA.x),pointB.y) //B.x doesnt work
//line(A.x,A.y,(B.x),B.y) //B.x doesnt work
//alert('4');

 }
}