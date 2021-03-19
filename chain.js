class Chain{
    constructor(Body1,Point2){
        var options={
            bodyA:Body1,
            pointB:Point2,
            length: 250,
            stiffness:0.4


            
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)

        



    }
    display(){
        if (this.chain.bodyA!=null){
        

        
        var pointA= this.chain.bodyA.position
        var pointB= this.chain.pointB
        strokeWeight(5)
        stroke("#301608")
        line (pointA.x,pointA.y,pointB.x,pointB.y)
       
       
        }
       
    }
    
}