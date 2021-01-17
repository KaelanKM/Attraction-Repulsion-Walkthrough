function Particle(x, y) {
  //The Vector Variables: 
  this.pos = createVector(x, y);
  this.prev = createVector(x,y);
  this.vel = createVector();//p5.Vector.random2D();
  //this.vel.setMag(random(2,5));
  this.acc = createVector();
  
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //reset force accumulation to 0.
  }
  
  this.show = function(){
    stroke(255, 255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y); //connect the dots (just visual)
    
    //saving the particles previous location data- so we can connect dots with line (above)
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }
  
  this.attracted = function(target, j){
    
  //from the position, to the target... determining travelling direction of vector
    var force = p5.Vector.sub(target, this.pos); //cant subtract with vectors... so this function is used. Its purpose is to subtract particle location, from target (centre of gravity)... determine dir
    
    //next figure out how to determine a vectors distance required to travel to attractor
    var dsquared = force.magSq();  //mag.sq is a function for magnitude squared
    dsquared = constrain(dsquared, 5 , 50); //makes sure program doesnt wack out with too high value
    
    //the gravitational constant:
    var G = 6.67408
    var strength = G / dsquared; 
    
    force.setMag(strength);  //This function takes a vector of any length, and sets the magnitude(distance) to any value that you want, while keeping the direction constant.
    if(j%2 != 0){
      force.mult(-1); // multiplying the force by a negative number makes it repel (opposite).
    }
    this.acc.add(force); //look up force accumilation for this one.
  }
}
