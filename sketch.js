var monkey, monkeyIMG, banana, bananaIMG, jungleIMG, jungle, stoneIMG, stone,score,ground,obGroup,bananaGroup

function preload() {
  monkeyIMG = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaIMG = loadImage("banana.png");
  jungleIMG = loadImage("jungle.jpg");
  stoneIMG = loadImage("stone.png");
  

}

function setup() {
  createCanvas(400, 400);
  
  jungle = createSprite(200,200,10,10);
  jungle.addImage("still",jungleIMG);
  jungle.scale = 1;
  jungle.velocityX=-4;
  jungle.x=jungle.width/2;
  
  ground = createSprite(200,390,400,10);
  ground.visible = false;
  
  monkey = createSprite(100, 250, 20, 20);
  monkey.addAnimation("running", monkeyIMG);
  monkey.scale = 0.15;


  
  obGroup = new Group();
  bananaGroup = new Group();

  score = 0;
  
}

function draw() {

  background("white");
    console.log(monkey.y)
  
  if(jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  monkey.collide(ground);

  if(obGroup.isTouching(monkey)){
    monkey.scale = 0.1;
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score+=1;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space")&& monkey.y>320 ){
      monkey.velocityY = -12 ;
    }
  
  switch (score){
    case 2: monkey.scale = 0.16;
      break;
    case 4:monkey.scale = 0.17;
      break;
    case 6 : monkey.scale = 0.18;
      break;
    case 8: monkey.scale = 0.19;
      break;
    case 10: monkey.scale = 0.20;
      break;
    case 12: monkey.scale = 0.21;
      break;
    case 14: monkey.scale = 0.22;
      break;
    case 16: monkey.scale = 0.23;
      break;
}
  


  spawnob();
  spawnbanana();

  drawSprites();
  

  fill("white");
  textSize(18);
  text("survival time = "+ score,100,20);
}

function spawnob() {
  if(frameCount % 150 === 0) {
      stone = createSprite(400,360,20,20);
  stone.addImage("still",stoneIMG);
  stone.scale = 0.15;
    
  
  
    stone.velocityX = -7;

    lifetime = 100;

    obGroup.add(stone);
  }
}

function spawnbanana() {
  if(World.frameCount % 80 === 0) {

      banana = createSprite(400,Math.round(random(200,250)),20,20);
  banana.addImage("still",bananaIMG);
  banana.scale = 0.04;
    
    banana.velocityX = -7;

    banana.scale = 0.05;
    banana.lifetime = 80;

    bananaGroup.add(banana);
      monkey.collide(banana);
    if(banana.collide(monkey)){
      monkey.scale += 1;
    }
    
  }
}