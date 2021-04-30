const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var engine, world;
var backgroundImg;
var bg, Hour;
var snow = []
var maxSnow = 100;
//var boy, girl;

function preload()
{
  getbackgroundImg()
 // boy = loadImage("boy1.png")
}
function setup() {
  createCanvas(900,600);

  engine = Engine.create();
  world = engine.world;  
  
  for(var i = 0; i < maxSnow; i++)
  {
    snow.push(new Snowfall(random(0,500), random(0,500)))
  }
  //createSprite(400, 200, 50, 50);
}

function draw() {
  //background(255,255,255);
  if (backgroundImg)
  background(backgroundImg)

 // image(boy,200,100,50,50)

  //Engine.update(engine)
  
  for (var i = 0; i < maxSnow; i++)
  {
    snow[i].display()
    snow[i].update()
  }

  drawSprites();
}

async function getbackgroundImg()
{
  var response = await fetch("http://worldclockapi.com/api/json/est/now")
  console.log(response)

  var responseJSON = await response.json()
  console.log(responseJSON)

  currentdatetime = responseJSON.currentDateTime; 
  Hour = currentdatetime.slice(11,13)
  console.log(Hour)   

  if(Hour >= 20 && Hour < 4)
  {
    bg = "snow2.jpg"
    console.log(bg)
  }else if(Hour >= 4 && Hour < 12)
  {
    bg = "snow1.jpg"
  }else if(Hour >= 12 && Hour < 20)
  {
    bg = "snow3.jpg"
  }

   backgroundImg = loadImage(bg)
} 