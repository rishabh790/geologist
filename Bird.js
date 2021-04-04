class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,20,70);
    
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}
