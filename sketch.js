var canvas;
var  rectangle1;

function preload(){
     song = loadSound("music.mp3");
     movingBoxImg=loadImage("download.jpeg")
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rectangle1 = createSprite(700,580,150,20);
    rectangle1.shapeColor="red"

    rectangle2 = createSprite(500,580,150,20);
    rectangle2.shapeColor="green"

    rectangle3 = createSprite(300,580,150,20);
    rectangle3.shapeColor="orange"

    rectangle4 = createSprite(100,580,150,20);
    rectangle4.shapeColor="indigo"

     //create box sprite and give velocity

     movingBox=createSprite(400,300,50,50)
     movingBox.scale=0.4;
     movingBox.shapeColor="0"
     movingBox.velocityY=8;
     movingBox.velocityX=8;
     movingBox.debug=true

     




    
    
     

     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

                                                 
   edges=createEdgeSprites();

   movingBox.bounceOff(edges)

    
  


    //add condition to check if box touching surface and make it box

    if(movingBox.isTouching(rectangle1)){
        movingBox.shapeColor="red";
        
        song.loop(false); 
        textSize(20);
        fill("red");
        text("RED",400,300);
    }

    if(movingBox.isTouching(rectangle2)){
        movingBox.shapeColor="green";
       
        song.loop(false); 
        textSize(20);
        fill("green");
        text("GREEN",400,300);
        
    }


    if(movingBox.isTouching(rectangle3)){
        movingBox.shapeColor="orange";

        song.loop(false); 
        textSize(20);
        fill("orange");
        text("ORANGE",400,300);
    }

    if(movingBox.isTouching(rectangle4)){
        movingBox.shapeColor="indigo";
        
        song.loop(false); 
        textSize(20);
        fill("indigo");
        text("INDIGO",400,300);
    }

     


    drawSprites();
    
    textSize(20);
    fill(255);
    text("COLOUR CHANGER",300,50);
    
    
    
 
}



