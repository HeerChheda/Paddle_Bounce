var ball,img,paddle;

function preload() {
  /* preload your images here of the ball and the paddle */
  playerPaddle = loadImage("paddle.png");
  bouncing_ball = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(350, 200, 100, 20);
  paddle.scale = 0.7;
  paddle.velocityY = 0;
  
  ball = createSprite(100, 200, 20, 20);
  ball.scale = 0.8;
 
  
  /* assign the images to the sprites */
    ball.addImage("bouncyBall", bouncing_ball);
    paddle.addImage("Player", playerPaddle);
  
  /* give the ball an initial velocity of 9 in the X direction */
   ball.velocityX = 9;

}

function draw() {
  
  background(205,153,0);
  
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */

  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle,randomVelocity);
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges[0]);
  paddle.bounceOff(edges[1]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y -10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y +10;
  }
  

  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  ball.velocityY = random(-8,8);
  /* assign the ball a random vertical velocity, so it bounces off in random direction */


}

