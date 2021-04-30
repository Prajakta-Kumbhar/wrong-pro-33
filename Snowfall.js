class Snowfall
{
    constructor(xpos,ypos)
    {
        var snow_options = 
        {
            restitution: 0.3,
            friction: 0.1
        }
     this.body = Bodies.circle(xpos,ypos,2,snow_options)
     this.radius = 2
     World.add(world,this.body)   
    }

    display()
    {
      var position = this.body.position;

      ellipseMode(RADIUS);
      ellipse(position.x,position.y,this.radius)
    }

    update()
    {
      if(this.body.position.y > height)
      {
        Matter.Body.setPosition(this.body, {x: random(0,500), y: random(0,500)})
      }
    }
}