var score = 0;

var player;

var galaxianGroup; 
var galaxian1Group;
var galaxian2Group;
var galaxian3Group;
var bulletGroup; 
var edges;

function preload() {
  playerImg = loadImage("Player.png");
  enemyImg = loadImage("EnemySpaceShip.png");
}

function setup() {
  player = createSprite(190,375,20,20);
  player.addImage(playerImg);
  player.scale = 0.05;

  galaxianGroup = createGroup();
  galaxian1Group = createGroup();
  galaxian2Group = createGroup();
  galaxian3Group = createGroup();
  bulletGroup = createGroup();

  edges =  createEdgeSprites();
}

function draw() {
  background("white");

  player.collide(edges);

  textSize(14);
  textFont("Georgia");
  stroke("red");
  fill("white");

  if (keyWentDown("space")) {
    createBullet(player.x);
  }

  if (bulletGroup.isTouching(galaxianGroup)) {
    galaxianGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 2;
  } else if (bulletGroup.isTouching(galaxian1Group)) {
    galaxian1Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 4;
  } else if (bulletGroup.isTouching(galaxian2Group)) {
    galaxian2Group.destroyEach();
    bulletGroup.destroyEach(); 
    score = score + 6;
  } else if (bulletGroup.isTouching(galaxian3Group)) {
    galaxian3Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 8;
  }

  if (galaxianGroup.isTouching(edges[3])) {
    score = score - 4;
    galaxianGroup.destroyEach();
  }
  if (galaxian1Group.isTouching(edges[3])) {
    score = score - 4;
    galaxian1Group.destroyEach();
  }
  if (galaxian2Group.isTouching(edges[3])) {
    score = score - 4;
    galaxian2Group.destroyEach();
  }
  if (galaxian3Group.isTouching(edges[3])) {
    score = score - 4;
    galaxian3Group.destroyEach();
  }

  if (keyDown(RIGHT_ARROW)){
    player.x += 5; 
  }
  if (keyDown(LEFT_ARROW)){
    player.x -= 5;
  }

  var select_enemy = (0,3);
  if (frameCount % 100 == 0) {
    if (select_enemy == 0) {
      createGalaxian();
    } else if (select_enemy == 1) {
      createGalaxian1();
    } else if (select_enemy == 2) {
      createGalaxian2();
    } else {
      createGalaxian3();
    }

  }

  drawSprites();
  text("PLAYER SCORE: "+ score, 10, 20);
}


function createGalaxian() {
  var galaxian = createSprite(random(20, 380), 0, 10, 10);
  galaxian.addImage(enemyImg);
  galaxian.scale = 0.04;
  galaxian.velocityY = 4;
  galaxian.lifetime = 1000;
  galaxianGroup.add(galaxian);
}

function createGalaxian1() {
  var galaxian1 = createSprite(random(20, 380), 0, 10, 10);
  galaxian1.addImage(enemyImg);
  galaxian1.scale = 0.04;
  galaxian1.velocityY = 4;
  galaxian1.lifetime = 1000;
  galaxian1Group.add(galaxian1);
}

function createGalaxian2() {
  var galaxian2 = createSprite(random(20, 380), 0, 10, 10);
  galaxian2.addImage(enemyImg);
  galaxian2.scale = 0.04;
  galaxian2.velocityY = 4;
  galaxian2.lifetime = 1000;
  galaxian2Group.add(galaxian2);
}

function createGalaxian3() {
  var galaxian3 = createSprite(random(0, 400), 0, 10, 10);
  galaxian3.addImage(enemyImg);
  galaxian3.scale = 0.04;
  galaxian3.velocityY = 4;
  galaxian3.lifetime = 1000;
  galaxian3Group.add(galaxian3);
}

function createBullet(x) {
  var bullet = createSprite(100, 100, 5, 10);
  bullet.y = 360;
  bullet.x = x;                                           
  bullet.shapeColor = "blue";
  bullet.velocityY = -4;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}