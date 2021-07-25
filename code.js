var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["927391fa-cd64-4394-a2a0-7a0cbcc945bf","3463930c-8f03-413d-8197-c94235cc447c","6e34ef02-e115-46d9-b9ca-357f8115379b","73bdd994-e04e-441a-a850-8a7dde1db84e","e2c643fd-5a3c-44ea-83f5-74836a905cbe","af64637d-106f-4d2b-b3d7-676166f8fa12","841469fe-22eb-4a00-bc0d-6745dd7aee9a","0fe05141-6d93-4c6f-a3fa-f3020217afa6","e73170dd-6c03-4f8f-b016-e3362ea5f39c","324cb884-871a-40b8-a312-acc2e986fe3f","36cbc1a3-2903-4408-8ab7-94ecae831b63","a72ef849-e967-43c7-9a31-117e7b8cd1ee","95ba81ed-1461-4b15-a4fa-44546671c7da","80f3934f-7fa9-4b38-a554-5025b199a794","26239d2d-b409-44fa-a78f-129691f22673","32187b8c-4808-439f-9463-12be5ed407b6"],"propsByKey":{"927391fa-cd64-4394-a2a0-7a0cbcc945bf":{"name":"Gabar","categories":["people"],"frameCount":1,"frameSize":{"x":12,"y":40},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-15 21:43:35 UTC","pngLastModified":"2021-01-15 21:43:36 UTC","version":"YwGdXsuH.S59CVNE2kv2h97QOUDPs0U0","sourceUrl":null,"sourceSize":{"x":12,"y":40},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/927391fa-cd64-4394-a2a0-7a0cbcc945bf.png"},"3463930c-8f03-413d-8197-c94235cc447c":{"name":"lion","categories":["animals"],"frameCount":1,"frameSize":{"x":40,"y":30},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 18:28:53 UTC","pngLastModified":"2021-01-05 18:28:54 UTC","version":"eH9qNtPo9oBYXdocY3Ea2zsJ6fOSSjN2","sourceUrl":null,"sourceSize":{"x":40,"y":30},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/3463930c-8f03-413d-8197-c94235cc447c.png"},"6e34ef02-e115-46d9-b9ca-357f8115379b":{"name":"guard","categories":["fantasy"],"frameCount":1,"frameSize":{"x":31,"y":35},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:06:43 UTC","pngLastModified":"2021-01-05 19:08:00 UTC","version":"OFgqcHk0EkBXeeux.Uzfnu0pJmjyvBaA","sourceUrl":null,"sourceSize":{"x":31,"y":35},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/6e34ef02-e115-46d9-b9ca-357f8115379b.png"},"73bdd994-e04e-441a-a850-8a7dde1db84e":{"name":"car1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":16,"y":30},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:47:05 UTC","pngLastModified":"2021-01-05 19:47:05 UTC","version":"j2oxN_6Fba.fga8t3f1WyG2hDUf_Jy3b","sourceUrl":null,"sourceSize":{"x":16,"y":30},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/73bdd994-e04e-441a-a850-8a7dde1db84e.png"},"e2c643fd-5a3c-44ea-83f5-74836a905cbe":{"name":"car2","categories":["vehicles"],"frameCount":1,"frameSize":{"x":17,"y":30},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:46:46 UTC","pngLastModified":"2021-01-05 19:46:25 UTC","version":"e0CGLmitlKJEKgl1fXC5Bitz3ukBOFQv","sourceUrl":null,"sourceSize":{"x":17,"y":30},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/e2c643fd-5a3c-44ea-83f5-74836a905cbe.png"},"af64637d-106f-4d2b-b3d7-676166f8fa12":{"name":"grass","frameCount":1,"frameSize":{"x":28,"y":45},"looping":true,"frameDelay":12,"categories":["video_games"],"jsonLastModified":"2021-03-29 19:31:36 UTC","pngLastModified":"2021-03-29 19:31:37 UTC","version":"9DBe_TUZSDgTLjF9ZBYV_nmQUyQ1MBCa","sourceUrl":null,"sourceSize":{"x":28,"y":45},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/af64637d-106f-4d2b-b3d7-676166f8fa12.png"},"841469fe-22eb-4a00-bc0d-6745dd7aee9a":{"name":"goldbar","categories":["video_games"],"frameCount":1,"frameSize":{"x":53,"y":45},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:31:54 UTC","pngLastModified":"2021-03-29 19:31:54 UTC","version":"POfjRPmy0GFqekPxETja4QqdnTpKAsmW","sourceUrl":null,"sourceSize":{"x":53,"y":45},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/841469fe-22eb-4a00-bc0d-6745dd7aee9a.png"},"0fe05141-6d93-4c6f-a3fa-f3020217afa6":{"name":"river1","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"ykfXWFqi0uUG8PAHjZYZM7vQ7vHKr6mF","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/0fe05141-6d93-4c6f-a3fa-f3020217afa6.png"},"e73170dd-6c03-4f8f-b016-e3362ea5f39c":{"name":"river2","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"TlGVigdEEk47sr4trNYhq9MRD0RFx6hO","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/e73170dd-6c03-4f8f-b016-e3362ea5f39c.png"},"324cb884-871a-40b8-a312-acc2e986fe3f":{"name":"river3","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"LQxDRWgTozHPdyOIua27rm_GqkkShEUR","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/324cb884-871a-40b8-a312-acc2e986fe3f.png"},"36cbc1a3-2903-4408-8ab7-94ecae831b63":{"name":"river4","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"pqvyhgs3qJM2sNwZ2Ewg8hNCRn.gQmLI","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/36cbc1a3-2903-4408-8ab7-94ecae831b63.png"},"a72ef849-e967-43c7-9a31-117e7b8cd1ee":{"name":"river5","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"Eu2m2ZoOE.X0sY10gGDHO4yoGBvmrNMK","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/a72ef849-e967-43c7-9a31-117e7b8cd1ee.png"},"95ba81ed-1461-4b15-a4fa-44546671c7da":{"name":"river6","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"v.51gLgxayp6l_9YugkipvWIf8iVHDIZ","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/95ba81ed-1461-4b15-a4fa-44546671c7da.png"},"80f3934f-7fa9-4b38-a554-5025b199a794":{"name":"river7","categories":["video_games"],"frameCount":1,"frameSize":{"x":50,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:28:43 UTC","pngLastModified":"2021-03-29 19:28:44 UTC","version":"t60EEXx4T.VtiOXSW_Czsx618IaWlRW.","sourceUrl":null,"sourceSize":{"x":50,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/80f3934f-7fa9-4b38-a554-5025b199a794.png"},"26239d2d-b409-44fa-a78f-129691f22673":{"name":"croco","categories":["animals"],"frameCount":1,"frameSize":{"x":130,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 18:25:16 UTC","pngLastModified":"2021-01-05 18:25:16 UTC","version":"IabPQGMb8ACI4hMsqUE..y4TkEq9HcUn","sourceUrl":null,"sourceSize":{"x":130,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/26239d2d-b409-44fa-a78f-129691f22673.png"},"32187b8c-4808-439f-9463-12be5ed407b6":{"name":"python","categories":["animals"],"frameCount":1,"frameSize":{"x":170,"y":50},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 18:32:53 UTC","pngLastModified":"2021-01-05 18:32:53 UTC","version":"xtk9dBf72rmE9NAFwk_bTSSV5B46mhEX","sourceUrl":null,"sourceSize":{"x":170,"y":50},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/32187b8c-4808-439f-9463-12be5ed407b6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Thief = createSprite(10,20,10,10);
Thief.setAnimation("Gabar");




var lion = createSprite(50,302,10,10);
lion.setAnimation("lion");
lion.velocityX=7;
lion.velocityX=-7;



var car1 = createSprite(160,40,10,10);
car1.setAnimation("car1");
car1.velocityY=2;
car1.velocityY=-2;
var car2 = createSprite(250,40,10,10);
car2.setAnimation("car2");
car2.velocityY=2;
car2.velocityY=-2;




var road1 = createSprite(100,80,500,5);
road1.shapeColor="Black";

var road2 = createSprite(250,135,400,5);
road2.shapeColor="Black";

var road3 = createSprite(100,230,500,5);
road3.shapeColor="Black";

var road4 = createSprite(250,320,400,5);
road4.shapeColor="Black";



var tree = createSprite(100,298,10,10);
tree.setAnimation("grass");

var tree = createSprite(150,298,10,10);
tree.setAnimation("grass");

var tree = createSprite(300,298,10,10);
tree.setAnimation("grass");

var tree = createSprite(200,298,10,10);
tree.setAnimation("grass");

var tree = createSprite(250,298,10,10);
tree.setAnimation("grass");

var tree = createSprite(350,298,10,10);
tree.setAnimation("grass");



var goldbar = createSprite(380,380,10,10);
goldbar.setAnimation("goldbar");



var river1 = createSprite(10,202);
river1.setAnimation("river1");

var river2 = createSprite(150,202);
river2.setAnimation("river2");

var river3 = createSprite(100,202);
river3.setAnimation("river3");

var river4 = createSprite(50,202);
river4.setAnimation("river4");

var river5 = createSprite(200,202);
river5.setAnimation("river5");

var river6= createSprite(250,202);
river6.setAnimation("river6");

var river7= createSprite(300,202);
river7.setAnimation("river7");




var croco = createSprite(50,208,10,10);
croco.setAnimation("croco");
croco.velocityX=4;
croco.velocityX=-4;

var python = createSprite(200,210,10,10);
python.setAnimation("python");
python.velocityX=5;
python.velocityX=-5;



var guard = createSprite(300,380,10,10);
guard.setAnimation("guard");
guard.velocityX=-5;
guard.velocityX=5;





function draw() {
background("yellow");



{Thief.velocityX=0;
Thief.velocityY=0;}

if (keyDown("UP_ARROW")) {
Thief.velocityX=0;
Thief.velocityY=-4;
}

if (keyDown("DOWN_ARROW")) {
Thief.velocityX=0;
Thief.velocityY=4;
}

if (keyDown("RIGHT_ARROW")) {
Thief.velocityX=4;
Thief.velocityY=0;
}


if (keyDown("LEFT_ARROW")) {
Thief.velocityX=-4;
Thief.velocityY=0;
}


if (Thief.isTouching(goldbar)) {
  textSize(20);
fill("green");
playSpeech("Oh i win !", "male", "English");
  text("You win!",100,100);
}

createEdgeSprites();
Thief.bounceOff(edges);
Thief.bounceOff(road1);
Thief.bounceOff(road2);
Thief.bounceOff(road3);
Thief.bounceOff(road4);

lion.bounceOff(edges);
car1.bounceOff(edges);
car1.bounceOff(road1);
car2.bounceOff(edges);
car2.bounceOff(road1);
croco.bounceOff(edges);
python.bounceOff(edges);
guard.bounceOff(edges);



if 
  (Thief.isTouching(car1)||
  Thief.isTouching(car2)||
  Thief.isTouching(croco)||
  Thief.isTouching(python)||
  Thief.isTouching(guard)||
  Thief.isTouching(lion))
  { 
 Thief.x = 10;  
 Thief.y = 20;
 
textSize(20);
fill("red");
playSpeech("ooch!", "male", "English");
text("Game Over!",200,100);
}



drawSprites();
        
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
