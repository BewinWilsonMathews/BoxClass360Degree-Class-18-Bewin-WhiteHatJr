class Box
  {
    constructor(x,y,w,h,vy,vx)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vy = vy;
      this.vx = vx
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move()
    {
      this.x = this.x+this.vx;
    }
    
    moveUp(){
      this.y = this.y - this.vy
    }
  }

  
