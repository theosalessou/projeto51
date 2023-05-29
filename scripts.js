var leftEdge, rightEdge, topEdge, bottomEdge;
var paddle, ball;

var blocks = [];
var blockColor;

var brickDestroySound, ballBounceOffSound;

function preload() {
    brickDestroySound = loadSound("sounds/brickDestroy.mp3");
    ballBounceOffSound = loadSound("sounds/ballBounceOff.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    leftEdge = createSprite(windowWidth / 2 - 600, windowHeight / 2, 1, windowWidth);
    leftEdge.visible = false;
    rightEdge = createSprite(windowWidth / 2 + 600, windowHeight / 2, 1, windowWidth);
    rightEdge.visible = false;
    topEdge = createSprite(windowWidth / 2, windowHeight / 2 - 330, windowHeight * 2 - 200, 1);
    topEdge.visible = false;
    bottomEdge = createSprite(windowWidth / 2, windowHeight / 2 + 300, windowHeight * 2 - 200, 1);
    bottomEdge.visible = false;

    paddle = createSprite(windowWidth / 2, windowHeight / 2 + 250, 100, 10);
    paddle.shapeColor = "black";

    ball = createSprite(windowWidth / 2, windowHeight / 2 + 200, 10, 10);
    ball.shapeColor = "blue";

    createBlocks();
}

function draw() {

    background("white");

    if (keyDown(LEFT_ARROW)) {
        paddle.x = paddle.x - 15;
    }

    if (keyDown(RIGHT_ARROW)) {
        paddle.x = paddle.x + 10;
    }

    if (keyDown("enter")) {
        ball.velocityY = +10;
    }

    if (ball.bounceOff(paddle)) {
        ball.velocityX = random(-10, 10);
        ballBounceOffSound.play();
    }


    for (var i = 0; i < blocks.length; i++) {
        if (ball.bounceOff(blocks[i])) {
            brickDestroySound.play();
            blocks[i].remove();
        }
    }

    if (ball.collide(bottomEdge)) {
        ball.x = windowWidth / 2;
        ball.y = windowHeight / 2 + 200;
        ball.velocityX = 0;
        ball.velocityY = 0;

        paddle.x = windowWidth / 2;
        paddle.y = windowHeight / 2 + 250;
        createBlocks();
    }

    paddle.collide(leftEdge);
    paddle.collide(rightEdge);
    
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    ball.bounceOff(topEdge);

    drawSprites();
}

function createBlocks() {
    blockColor = color(random(255), random(255), random(255));

    var posX = 50;

    for (var i = 0; i < 15; i++) {
        var block = createSprite(windowWidth / 2 + posX - 550, windowHeight / 2 - 300, 50, 20);
        blocks.push(block);

        block.shapeColor = blockColor;

        posX += 70;
    }

    blockColor = color(random(255), random(255), random(255));

    posX = 50;

    for (var i = 0; i < 15; i++) {
        var block = createSprite(windowWidth / 2 + posX - 550, windowHeight / 2 - 250, 50, 20);
        blocks.push(block);

        block.shapeColor = blockColor;

        posX += 70;
    }

    blockColor = color(random(255), random(255), random(255));

    posX = 50;

    for (var i = 0; i < 15; i++) {
        var block = createSprite(windowWidth / 2 + posX - 550, windowHeight / 2 - 200, 50, 20);
        blocks.push(block);

        block.shapeColor = blockColor;

        posX += 70;
    }

    blockColor = color(random(255), random(255), random(255));

    posX = 50;

    for (var i = 0; i < 15; i++) {
        var block = createSprite(windowWidth / 2 + posX - 550, windowHeight / 2 - 150, 50, 20);
        blocks.push(block);

        block.shapeColor = blockColor;

        posX += 70;
    }

    blockColor = color(random(255), random(255), random(255));

    posX = 50;

    for (var i = 0; i < 15; i++) {
        var block = createSprite(windowWidth / 2 + posX - 550, windowHeight / 2 - 100, 50, 20);
        blocks.push(block);

        block.shapeColor = blockColor;

        posX += 70;
    }

    blockColor = color(random(255), random(255), random(255));

    posX = 50;

    for (var i = 0; i < 15; i++) {
        var block = createSprite(windowWidth / 2 + posX - 550, windowHeight / 2 - 50, 50, 20);
        blocks.push(block);

        block.shapeColor = blockColor;

        posX += 70;
    }
}