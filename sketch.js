var box

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,250,25,25,1,1)
}

function draw() 
{
  background(220);
  box.show();
  //box.move();
  box.moveUp();

}

