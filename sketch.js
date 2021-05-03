var canvas;
var block1;
var block2;
var block3;
var block4;
var music;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor="Black";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor="White";
    block3 = createSprite(515,580,200,30);
    block3.shapeColor="Red";
    block4 = createSprite(740,580,220,30);
    block4.shapeColor="Blue";
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor="White"
    ball.velocityX=4;
    ball.velocityY=9;

    //create box sprite and give velocity


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching(ball)&&ball.bounceOff(block1)) {
        ball.shapeColor="Red";
        music.play();
    }
    if(block2.isTouching(ball)){
        ball.shapeColor="Blue";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();

    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3)) {
        ball.shapeColor="White";
    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4)) {
        ball.shapeColor="Black";
    }
    
    drawSprites();
}
