const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var cima, baixo, direita, esquerda;
var bolinhadegude;

var ceu;
var leste;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  cima = new Parede(200,10,400,20);
  baixo = new Parede(200,390,400,20);
  esquerda = new Parede(10,200,20,400);
  direita = new Parede(390,200,20,400);

  var gudeConfig = {
    restitution: 0.65
  }
  
   bolinhadegude = Bodies.circle (200, 100, 20, gudeConfig);
   World.add (world, bolinhadegude);

   ceu = createImg ("up.png");
   ceu.position (220, 30);
   ceu.size (50, 50);
   ceu.mouseClicked (foguete);
  
   leste = createImg ("right.png");
   leste.position (20, 30);
   leste.size (50, 50);
   leste.mouseClicked (nascente);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  cima.daVinci();
  baixo.daVinci();
  esquerda.daVinci();
  direita.daVinci();

  ellipse (bolinhadegude.position.x, bolinhadegude.position.y, 20);
}

function foguete() {
  Matter.Body.applyForce(bolinhadegude, {x:0, y:0}, {x:0, y:-0.05});
}
 
function nascente() {
  Matter.Body.applyForce(bolinhadegude, {x: 0, y:0}, {x:0.05, y:0});
}