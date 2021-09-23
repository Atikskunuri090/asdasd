class Boat{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h)
        this.image = loadImage("./assets/boat.png")
        World.add(world,this.body)
        
    }
    boate(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}