const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);
    ground = new Ground(200, height, 400, 20);
    bird = new Bird(50, 50, 50, 50);
    pig = new Pig(150, 60, 50, 50);
    log = new Log(170,50,120,PI/2);
}

function draw() {
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log.display();

}