var attractors =[];
var particles = [];

function setup() { 
  createCanvas(400, 400);
  
  //Creating the particles (attracted)
  for(var i =0; i < 100; i++){
    particles.push(new Particle(random(width), random(height))); //this deterimines where the particles start
  }
  
  //creating the attractors... loop runs each time a attractor is creating. if i<10, 10 made.
//    for(var i =0; i < 10; i++){
//      attractors.push(createVector(random(width), random(height))); //   }
      
}

//create 
function mousePressed(){
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  stroke(255);
  strokeWeight(4);
  background(51);
  
  //drawing in the attractors
  for(var i =0; i < attractors.length; i++){
    if(i % 2==0){
    stroke(0, 255, 0); //make every second attractor/repeller green
    }
    else{
      stroke(255, 0 ,0) //make every second attractor/repeller red
    }
   point(attractors[i].x, attractors[i].y); //this is calling the reprentation of the gravity          centre
  }
  
  //calculate a force in the attracted function, force goes into the acceleration, into  velocity, goes into position... position updates continously, and is drawn.
  for(var i =0; i < particles.length; i++){
    var particle = particles[i];
       for(var j =0; j < attractors.length; j++){
        particle.attracted(attractors[j], j);
     }
    particle.update();
    particle.show();
  }
}

//final notes: 
//the terms 'particles' and 'the attracted' are used interchangebly in the notes 
//the terms 'gravity centres' and 'attractors' are used interchabgebly as well
//In this program, FORCE = ACCELLERATION (for objects with mass)
