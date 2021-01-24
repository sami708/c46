var player, enemy1, enemy2, enemy3, enemy4;
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
     player = createSprite(displayWidth/2,displayHeight/2);
     leftButton = createButton("←");
     rightButton = createButton("→");
     upButton = createButton("↑");
     downButton = createButton("↓");
     upperleftButton = createButton("↖");
     upperrightButton = createButton("↗");
     lowerleftButton = createButton("↙");
     lowerrightButton = createButton("↘");
     leftButton.position(displayWidth/35,displayHeight*4/5);
     rightButton.position(displayWidth/15,displayHeight*4/5);
     downButton.position(displayWidth/20,displayHeight*5/6);
     upButton.position(displayWidth/20,displayHeight*3/4);
     upperleftButton.position(displayWidth/30,displayHeight*3/4);
     upperrightButton.position(displayWidth/15,displayHeight*3/4);
     lowerleftButton.position(displayWidth/30,displayHeight*5/6);
     lowerrightButton.position(displayWidth/15,displayHeight*5/6);
     gameState = "start";
     
    start = createButton("▶");
    restart = createButton("🔄");
    start.position(displayWidth/2,displayHeight/3);
    restart.position(displayWidth/2,displayHeight/3);
    player.visible = false;
    restart.hide();
    start.size(60,60);
    textSize(30);

    enemy1Group = createGroup();
    enemy2Group = createGroup();
    enemy3Group = createGroup();
    enemy4Group = createGroup();
}


function draw(){
    background(0);
    if(gameState==="start"){
        text("Click on the start button to start",displayWidth/3,displayHeight/2);
        start.mousePressed(()=>{
            gameState = "play";
        });
    }
    if(gameState==="play"){
    start.hide();
    player.visible = true;
    leftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,0);
    });
    rightButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(4,0);
    });
    upButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(0,-4);
    });
    downButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(0,4);
    });
    upperrightButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(4,-4);
    });
    upperleftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,-4);
    });
    lowerrightButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(4,4);
    });
    lowerleftButton.mousePressed(()=>{
        bullet = createSprite(displayWidth/2,displayHeight/2,10,10);
        bullet.setVelocity(-4,4);
    });
    spawnEnemy();
    if(enemy1Group.isTouching(player)||enemy2Group.isTouching(player)||enemy3Group.isTouching(player)||enemy4Group.isTouching(player)){
        player.destroy();
        gameState = "end";
    }
}
else if(gameState==="end"){
     restart.show();
}
    drawSprites();
}
function spawnEnemy(){
    if(World.frameCount%120===0){
        r = Math.round(random(50,displayHeight-50));
        enemy1 = createSprite(0,r,50,50);
        rvx = Math.round(random(2,4));
        rvy = Math.round(random(-4,4));
        enemy1.setVelocity(rvx,rvy);
        enemy1.lifetime = 1000;
        enemy1Group.add(enemy1);
    }
    if(World.frameCount%240===0){
        r = Math.round(random(50,displayWidth-50));
        enemy2 = createSprite(r,0,50,50);
        rvx = Math.round(random(-4,4));
        rvy = Math.round(random(2,4));
        enemy2.setVelocity(rvx,rvy);
        enemy2.lifetime = 1000;
        enemy2Group.add(enemy2);
    }
    if(World.frameCount%300===0){
        r = Math.round(random(50,displayWidth-50));
        enemy3 = createSprite(displayWidth,r,50,50);
        rvx = Math.round(random(-2,-4));
        rvy = Math.round(random(-4,4));
        enemy3.setVelocity(rvx,rvy);
        enemy3.lifetime = 1000;
        enemy3Group.add(enemy3);
    }
    if(World.frameCount%380===0){
        r = Math.round(random(50,displayHeight-50));
        enemy4 = createSprite(r,displayHeight,50,50);
        rvx = Math.round(random(-4,4));
        rvy = Math.round(random(-2,-4));
        enemy4.setVelocity(rvx,rvy);
        enemy4.lifetime = 1000;
        enemy4Group.add(enemy4);
    }
}