var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var badScore=0;
var cashG,diamondsG,jwelleryG,swordGroup;
var sound;
var boyImg2,boyImg;
var edges;
var invisibleGround1,invisibleGround2;
var backgroundSound;
var bgImg;
var treeImg1,treeImg2,treeImg3;
var houseImg1,houseImg2;
var countdown=10;
var photo3Img,photo3;
var badHabit1Img,badHabit2Img,badHabit3Img,badHabit4Img,badHabit5Img,badHabit6Img,badHabit7Img,badHabit8Img;
var badHabit9Img,badHabit10Img,badHabit11Img,badHabit12Img,badHabit13Img,badHabit14Img,badHabit15Img;
var goodHabit16Img,goodHabit17Img,goodHabit18Img,goodHabit19Img,goodHabit20Img,goodHabit21Img;
var goodHabit22Img,goodHabit23Img,goodHabit24Img,goodHabit25Img,goodHabit26Img,goodHabit27Img
var badHabit1G,badHabit2G,badHabit3G,badHabit4G,badHabit5G,badHabit6G,badHabit7G,badHabit8G,badHabit9G,badHabit10G;
var badHabit11G,badHabit12G,badHabit13G,badHabit14G,badHabit15G;
var goodHabit16G,goodHabit17G,goodHabit18G,goodHabit19G,goodHabit20G;
var goodHabit21G,goodHabit23G,goodHabit22G,goodHabit24G,goodHabit25G,goodHabit26G,goodHabit27G;
//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");

  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  boyImg2=loadAnimation("baby1.png","baby2.png");

  cashImg = loadImage("photo1.png");
  diamondsImg = loadImage("photo 2.png");
  jwelleryImg = loadImage("photo1.png");
  swordImg = loadImage("virusImage.png");
  sound=loadSound("devil.mp3")
  endImg =loadAnimation("gameOver.png");
  photo3Img=loadImage("photo3.png");


  backgroundSound=loadSound("backgroundSound.mp3");
  bgImg=loadImage("photo11.png");

  treeImg1=loadImage("photo6.png");
  treeImg2=loadImage("photo7.png");
  treeImg3=loadImage("photo8.png");

  houseImg1=loadImage("photo9.png");
  houseImg2=loadImage("photo10.png");

  badHabit1Img=loadImage("badHabit1.jpg");
  badHabit2Img=loadImage("badHabit2.jpg");
  badHabit3Img=loadImage("badHabit3.jpg");
  badHabit4Img=loadImage("badHabit4.jpg");
  badHabit5Img=loadImage("badHabit5.jpg");
  badHabit6Img=loadImage("badHabit6.jpg");
  badHabit7Img=loadImage("badHabit7.jpg");
  badHabit8Img=loadImage("badHabit8.jpg");
  badHabit9Img=loadImage("badHabit9.jpg");
  badHabit10Img=loadImage("badHabit10.jpg");
  badHabit11Img=loadImage("badHabit11.jpg");
  badHabit12Img=loadImage("badHabit12.jpg");
  badHabit13Img=loadImage("badHabit13.jpg");
  badHabit14Img=loadImage("badHabit14.jpg");
  badHabit15Img=loadImage("badHabit15.jpg");

  goodHabit16Img=loadImage("goodHabit16.png");
  goodHabit17Img=loadImage("goodHabit17.png");
  goodHabit18Img=loadImage("goodHabit18.png");
  goodHabit19Img=loadImage("goodHabit19.png");
  goodHabit20Img=loadImage("goodHabit20.png");
  goodHabit21Img=loadImage("goodHabit21.png");
  goodHabit22Img=loadImage("goodHabit22.png");
  goodHabit23Img=loadImage("goodHabit23.png");
  goodHabit24Img=loadImage("goodHabit24.png");
  goodHabit26Img=loadImage("goodHabit26.png");
  goodHabit27Img=loadImage("goodHabit27.jpg");
 
}

function setup(){
  backgroundSound.loop();
  
  createCanvas(windowWidth-(windowWidth/2-500),windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 10;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.addAnimation("babyImg",boyImg2);
boy.scale=0.08;
  
edges=createSprite(700,2200,10,1000);
edges.shapeColor="red"

  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
badHabit1G=new Group();
badHabit2G=new Group();
badHabit3G=new Group();
badHabit4G=new Group();
badHabit5G=new Group();
badHabit6G=new Group();
badHabit7G=new Group();
badHabit8G=new Group();
badHabit9G=new Group();
badHabit10G=new Group();
badHabit11G=new Group();
badHabit12G=new Group();
badHabit13G=new Group();
badHabit14G=new Group();
badHabit15G=new Group();

goodHabit16G=new Group();
goodHabit17G=new Group();
goodHabit18G=new Group();
goodHabit19G=new Group();
goodHabit20G=new Group();
goodHabit21G=new Group();
goodHabit23G=new Group();
goodHabit22G=new Group();
goodHabit24G=new Group();
goodHabit25G=new Group();
goodHabit26G=new Group();
goodHabit27G=new Group();

}

function draw() {
 // sound.stop();
  //console.log(mouseX)
  console.log("x :" +mouseX+"  y:"+mouseY)
  
  
  //console.log(mouseX)
  if(gameState===PLAY){
  background(bgImg);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  path.velocityY = 10 +frameCount/100;
   
  select=Math.round(random(1,6));
  
  if(frameCount%90==0){
    if(select==1){
      createTree1();
    }
      if(select==2){
        createHouse1();
    }
      if(select==3){
        createTree2();
    }
      if(select==4){
        createHouse2();
    }
  }
    
    

    selectBalloon=Math.round(random(1,34));
  console.log(selectBalloon);
  
  if(frameCount%90==0){
    if(selectBalloon==1){
      createCash();
    }
      if(selectBalloon==2){
        createDiamonds();
    }
      if(selectBalloon==3){
        createJwellery();
    }
      if(selectBalloon==4){
        createSword();
    }
    if(selectBalloon==5){
      createPhoto3();
    }
    if(selectBalloon==7){
      createBadHabit1();
    }
    if(selectBalloon==8){
      createBadHabit2();
    }
    if(selectBalloon==9){
      createBadHabit3();
    }
    if(selectBalloon==10){
      createBadHabit4();
    }
    if(selectBalloon==11){
      createBadHabit5();
    }
    if(selectBalloon==12){
      createBadHabit6();
    }
    if(selectBalloon==13){
      createBadHabit7();
    }
    if(selectBalloon==14){
      createBadHabit9();
    }
    if(selectBalloon==15){
      createBadHabit10();
    }
    if(selectBalloon==17){
      createBadHabit11();
    }
    if(selectBalloon==18){
      createBadHabit8();
    }
    if(selectBalloon==19){
      createBadHabit12();
    }
    if(selectBalloon==20){
      createBadHabit13();
    }
    if(selectBalloon==21){
      createBadHabit14();
    }
    if(selectBalloon==22){
      createBadHabit15();
    }
    if(selectBalloon==23){
     createGoodHabit1();
    }
    if(selectBalloon==24){
      createGoodHabit2();
     }
     if(selectBalloon==25){
      createGoodHabit3();
     }
     if(selectBalloon==26){
      createGoodHabit4();
     }
     if(selectBalloon==27){
      createGoodHabit5();
     }
     if(selectBalloon==28){
      createGoodHabit6();
     }
     if(selectBalloon==29){
      createGoodHabit7();
     }
     if(selectBalloon==30){
      createGoodHabit8();
     }
     if(selectBalloon==31){
      createGoodHabit9();
     }
     if(selectBalloon==33){
      createGoodHabit11();
     }
     if(selectBalloon==34){
      createGoodHabit12();
     }
    

  }

    if (cashG.isTouching(boy) ||goodHabit16G.isTouching(boy) ||goodHabit17G.isTouching(boy) || goodHabit18G.isTouching(boy)) {
      boy.changeAnimation("SahilRunning",boyImg);
      boy.scale=0.08;
      cashG.destroyEach();
      goodHabit16G.destroyEach();
      goodHabit17G.destroyEach();
      goodHabit18G.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy) || goodHabit19G.isTouching(boy) || goodHabit20G.isTouching(boy) || goodHabit21G.isTouching(boy)) {
      boy.changeAnimation("SahilRunning",boyImg);
      boy.scale=0.08;
      diamondsG.destroyEach();
      goodHabit19G.destroyEach();
      goodHabit20G.destroyEach();
      goodHabit21G.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy) || goodHabit22G.isTouching(boy) || goodHabit23G.isTouching(boy) || goodHabit24G.isTouching(boy)) {
      boy.changeAnimation("SahilRunning",boyImg);
      boy.scale=0.08;
      jwelleryG.destroyEach();
      goodHabit22G.destroyEach();
      goodHabit23G.destroyEach();
      goodHabit24G.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else if(jwelleryG.isTouching(boy) || goodHabit25G.isTouching(boy) || goodHabit26G.isTouching(boy) ||goodHabit27G.isTouching(boy) ) {
      boy.changeAnimation("SahilRunning",boyImg);
      boy.scale=0.08;
      jwelleryG.destroyEach();
      goodHabit25G.destroyEach();
      goodHabit26G.destroyEach();
      goodHabit27G.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
     
    
    else{
      if(swordGroup.isTouching(boy)
       || badHabit1G.isTouching(boy) 
       || badHabit2G.isTouching(boy)
        || badHabit3G.isTouching(boy)
      || badHabit4G.isTouching(boy) 
      || badHabit5G.isTouching(boy) 
      || badHabit6G.isTouching(boy) 
      || badHabit7G.isTouching(boy)
      || badHabit8G.isTouching(boy)
       || badHabit9G.isTouching(boy) 
       || badHabit10G.isTouching(boy)
        || badHabit11G.isTouching(boy)
      || badHabit12G.isTouching(boy) 
      || badHabit13G.isTouching(boy) 
      || badHabit14G.isTouching(boy) 
      || badHabit15G.isTouching(boy)
       ){
        gameState=PLAY;
       // sound.play();
       sound.play();
      badScore=badScore+10;
      treasureCollection=0;
       sound.setVolume(1);
    boy.changeAnimation("babyImg",boyImg2);
   // boy.x=width/2;
    //boy.y=300;
    boy.scale=0.6;
    
    swordGroup.destroyEach();
    badHabit1G.destroyEach();
    badHabit2G.destroyEach();
    badHabit3G.destroyEach();
    badHabit4G.destroyEach();
    badHabit5G.destroyEach();
    badHabit6G.destroyEach();
    badHabit7G.destroyEach();
    badHabit8G.destroyEach();
    badHabit9G.destroyEach();
    badHabit10G.destroyEach();
    badHabit11G.destroyEach();
    badHabit12G.destroyEach();
    badHabit13G.destroyEach();
    badHabit14G.destroyEach();
    badHabit15G.destroyEach();
    
    
    /*cashG.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    swordGroup.setVelocityYEach(0);*/
        
       
    drawSprites(); 
    }
  }
  
  drawSprites();
  
  }
  if(gameState===END){
  
  }
  textSize(64);
  fill("yellow");
  text("GOOD SCORE: "+ treasureCollection,height-250,70);
  text("BAD SCORE: "+ badScore,height-250,150)

}

function createCash() {
 
  var cash = createSprite(Math.round(random(width/2, height-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=1;
  cash.velocityY = 9+frameCount/100;
  cash.lifetime = 300;
  cashG.add(cash);
 
}

function createDiamonds() {
  
  var diamonds = createSprite(Math.round(random(width/2, height-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=1;
  diamonds.velocityY = 9+frameCount/100;
  diamonds.lifetime = 300;
  diamondsG.add(diamonds);

}

function createJwellery() {
  
  var jwellery = createSprite(Math.round(random(width/2, height),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=1;
  jwellery.velocityY = 9+frameCount/100;
  jwellery.lifetime = 300;
  jwelleryG.add(jwellery);
 
}

function createSword(){
 
  var sword = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=1;
  sword.velocityY = 9+frameCount/100;
  sword.lifetime = 300;
  swordGroup.add(sword);
  
}
function createTree1(){
  var tree1=createSprite(280,40,10,10);
 tree1.scale=2;
 tree1.addImage(treeImg1);
 tree1.velocityY=9+frameCount/100;
 tree1.lifetime=300;
}
function createTree2(){
  var  tree2=createSprite(2635,40,10,10);
 tree2.scale=1;
 tree2.velocityY=9+frameCount/100;
 tree2.lifetime=300;
 tree2.addImage(treeImg2);
}
function createTree3(){
  var tree3=createSprite(280,40,10,10);
 tree3.scale=1;
 tree3.velocityY=9+frameCount/100;
 tree3.lifetime=300;
 tree3.addImage(treeImg3);
}
function createHouse1(){
  var  house1=createSprite(280,40,10,10);
  house1.scale=2.5;
  house1.velocityY=9+frameCount/100;
  house1.lifetime=300;
  house1.addImage(houseImg1);

}
function createHouse2(){
  var house2=createSprite(2635,40,10,10);
  house2.scale=2.5;
  house2.velocityY=9+frameCount/100;
  house2.lifetime=300;
  house2.addImage(houseImg2);

}
function createPhoto3(){
  var photo3=createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  photo3.addImage(photo3Img);
  photo3.scale=1;
  photo3.velocityY = 9+frameCount/100;
  photo3.lifetime = 300;
}
function createBadHabit1(){
  var badHabit1 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit1.addImage(badHabit1Img);
  badHabit1.scale=2;
  badHabit1.velocityY = 9+frameCount/100;
  badHabit1.lifetime = 300;
  badHabit1G.add(badHabit1);
}
function createBadHabit2(){
  var badHabit2 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit2.addImage(badHabit2Img);
  badHabit2.scale=2;
  badHabit2.velocityY = 9+frameCount/100;
  badHabit2.lifetime = 300;
  badHabit2G.add(badHabit2);
}
function createBadHabit3(){
  var  badHabit3 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit3.addImage(badHabit3Img);
  badHabit3.scale=2;
  badHabit3.velocityY = 9+frameCount/100;
  badHabit3.lifetime = 300;
  badHabit3G.add(badHabit3);
}
function createBadHabit4(){
  var badHabit4 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit4.addImage(badHabit4Img);
  badHabit4.scale=2;
  badHabit4.velocityY = 9+frameCount/100;
  badHabit4.lifetime = 300;
  badHabit4G.add(badHabit4);
}
function createBadHabit5(){
  var badHabit5 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit5.addImage(badHabit5Img);
  badHabit5.scale=2;
  badHabit5.velocityY = 9+frameCount/100;
  badHabit5.lifetime = 300;
  badHabit5G.add(badHabit5);
}
function createBadHabit6(){
  var  badHabit6 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit6.addImage(badHabit6Img);
  badHabit6.scale=2;
  badHabit6.velocityY = 9+frameCount/100;
  badHabit6.lifetime = 300;
  badHabit6G.add(badHabit6);
}
function createBadHabit7(){
  var badHabit7 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit7.addImage(badHabit7Img);
  badHabit7.scale=2;
  badHabit7.velocityY = 9+frameCount/100;
  badHabit7.lifetime = 300;
  badHabit7G.add(badHabit7);
}
function createBadHabit8(){
  var badHabit8 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit8.addImage(badHabit8Img);
  badHabit8.scale=2;
  badHabit8.velocityY = 9+frameCount/100;
  badHabit8.lifetime = 300;
  badHabit8G.add(badHabit8);
}
function createBadHabit9(){
  var badHabit9 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit9.addImage(badHabit9Img);
  badHabit9.scale=2;
  badHabit9.velocityY = 9+frameCount/100;
  badHabit9.lifetime = 300;
  badHabit9G.add(badHabit9);
}
function createBadHabit10(){
  var badHabit10 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit10.addImage(badHabit10Img);
  badHabit10.scale=2;
  badHabit10.velocityY = 9+frameCount/100;
  badHabit10.lifetime = 300;
  badHabit10G.add(badHabit10);
}
function createBadHabit11(){
  var badHabit11 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit11.addImage(badHabit11Img);
  badHabit11.scale=2;
  badHabit11.velocityY = 9+frameCount/100;
  badHabit11.lifetime = 300;
  badHabit11G.add(badHabit11);
}
function createBadHabit12(){
  var  badHabit12 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit12.addImage(badHabit12Img);
  badHabit12.scale=2;
  badHabit12.velocityY = 9+frameCount/100;
  badHabit12.lifetime = 300;
  badHabit12G.add(badHabit12);
}
function createBadHabit13(){
  var  badHabit13 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit13.addImage(badHabit13Img);
  badHabit13.scale=2;
  badHabit13.velocityY = 9+frameCount/100;
  badHabit13.lifetime = 300;
  badHabit13G.add(badHabit13);
}
function createBadHabit14(){
  var badHabit14 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit14.addImage(badHabit14Img);
  badHabit14.scale=2;
  badHabit14.velocityY = 9+frameCount/100;
  badHabit14.lifetime = 300;
  badHabit14G.add(badHabit14);
}
function createBadHabit15(){
  var  badHabit15 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  badHabit15.addImage(badHabit15Img);
  badHabit15.scale=2;
  badHabit15.velocityY = 9+frameCount/100;
  badHabit15.lifetime = 300;
  badHabit15G.add(badHabit15);
}
function createGoodHabit1(){
  var  goodHabit1 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit1.addImage(goodHabit16Img);
  goodHabit1.scale=2;
  goodHabit1.velocityY = 9+frameCount/100;
  goodHabit1.lifetime = 300;
  goodHabit16G.add(goodHabit1);

}
function createGoodHabit2(){
  var  goodHabit2 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit2.addImage(goodHabit17Img);
  goodHabit2.scale=2;
  goodHabit2.velocityY = 9+frameCount/100;
  goodHabit2.lifetime = 300;
  goodHabit17G.add(goodHabit2);

}
function createGoodHabit3(){
  var  goodHabit3 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit3.addImage(goodHabit18Img);
  goodHabit3.scale=2;
  goodHabit3.velocityY = 9+frameCount/100;
  goodHabit3.lifetime = 300;
  goodHabit18G.add(goodHabit3);

}
function createGoodHabit4(){
  var  goodHabit4 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit4.addImage(goodHabit19Img);
  goodHabit4.scale=2;
  goodHabit4.velocityY = 9+frameCount/100;
  goodHabit4.lifetime = 300;
  goodHabit19G.add(goodHabit4);

}
function createGoodHabit5(){
  var  goodHabit5 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit5.addImage(goodHabit20Img);
  goodHabit5.scale=2;
  goodHabit5.velocityY = 9+frameCount/100;
  goodHabit5.lifetime = 300;
  goodHabit20G.add(goodHabit5);

}
function createGoodHabit6(){
  var  goodHabit6 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit6.addImage(goodHabit21Img);
  goodHabit6.scale=2;
  goodHabit6.velocityY = 9+frameCount/100;
  goodHabit6.lifetime = 300;
  goodHabit21G.add(goodHabit6);

}
function createGoodHabit7(){
  var  goodHabit7 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit7.addImage(goodHabit22Img);
  goodHabit7.scale=2;
  goodHabit7.velocityY = 9+frameCount/100;
  goodHabit7.lifetime = 300;
  goodHabit22G.add(goodHabit7);

}
function createGoodHabit8(){
  var  goodHabit8 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit8.addImage(goodHabit23Img);
  goodHabit8.scale=2;
  goodHabit8.velocityY = 9+frameCount/100;
  goodHabit8.lifetime = 300;
  goodHabit23G.add(goodHabit8);

}
function createGoodHabit9(){
  var  goodHabit9 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit9.addImage(goodHabit24Img);
  goodHabit9.scale=2;
  goodHabit9.velocityY = 9+frameCount/100;
  goodHabit9.lifetime = 300;
  goodHabit24G.add(goodHabit9);

}
function createGoodHabit11(){
  var  goodHabit11 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit11.addImage(goodHabit26Img);
  goodHabit11.scale=2;
  goodHabit11.velocityY = 9+frameCount/100;
  goodHabit11.lifetime = 300;
  goodHabit26G.add(goodHabit11);

}
function createGoodHabit12(){
  var  goodHabit12 = createSprite(Math.round(random(width/2-100, height),40, 10, 10));
  goodHabit12.addImage(goodHabit27Img);
  goodHabit12.scale=2;
  goodHabit12.velocityY = 9+frameCount/100;
  goodHabit12.lifetime = 300;
  goodHabit27G.add(goodHabit12);

}
