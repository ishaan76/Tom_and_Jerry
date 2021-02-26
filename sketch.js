var tom, tom_running
var jerry, jerry_running;

function preload() {
    tom_running = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png")
    jerry_running = loadAnimation("mouse1.png",,"mouse2.png","mouse3.png","mouse4.png")
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    tom=createSprite(80,315,20,20)
    tom.addAnimation("moving",tom_running);

    jerry=createSprite(160,200,20,20)
    jerry.addAnimation("moving",jerry_running);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", catImg2);
        tom.changeAnimation("tomRunning");

    }
    text(jerryX + ',' + jerryY,10,45);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){

        
    }
  //For moving and changing animation write code here
  

}
