class Ground{
    constructor (x,y,w,h){
   var options = {
       isStatic : true
   }
 this.width = w;
 this.height = h;

   this.body = Bodies.rectangle(x,y, this.width, this.height, options);
   World.add(world,this.body);
    }

    display(){
        var gr = this.body.position;
        rectMode(CENTER);
        fill('brown');
        rect(gr.x, gr.y,this.width, this.height);
    }
}