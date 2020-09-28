class Ground{
    constructor(x,y,newWidth,newHeight){
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,newWidth,newHeight,options)
        this.width=newWidth;
        this.height=newHeight;
        World.add(world,this.body)
    
    }
    display(){
        rectMode(CENTER);
        fill ("brown")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}  