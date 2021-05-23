const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, pig1, log1, log2, log3, log4, bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,100);

    box1 = new Box(700,520,70,70);
    box2 = new Box(940,520,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(940,320,70,70);   
    box5 = new Box(820,250,70,70);

    pig1 = new Pig(820,520);
    pig2 = new Pig(820,320);
    ground = new Ground(600,height,1200,20);
    log1 = new Log(820, 350, 350, PI/2);
    log2 = new Log(820, 260, 350, PI/2);
    log3 = new Log(760, 150, 170, PI/7);
    log4 = new Log(860, 150, 170, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    bird.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();  
    box5.display();
    pig1.display();
    pig2.display()
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
}