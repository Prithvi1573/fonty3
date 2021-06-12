rightWristX=0;
leftWristX=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500); 
    
    canvas = createCanvas(500, 500);
  canvas.position(500,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
  console.log('Model Loaded')
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = "+leftWristX+"rightWristX"+rightWristX+"difference ="+difference);
}
}
function draw()
{
      background('#99ffbe');
      fill('#000000');
      textSize(difference);
      text('Prithvi',50,300);
}
