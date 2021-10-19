noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas=creteCanvas(550,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,550);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length>0)
     {
         console.log(results);
         noseX=results[0].pose.nose.x;
         noseY=results[0].pose.nose.y;
         console.log("noseX ="+ noseX +"noseY ="+ noseY);
         leftWristX = results[0].pose.leftWristX.x;
         rightWristX = results[0].pose.rightWristX.x;
         console.log("leftWristX ="+ leftWristX +"rightWristX ="+ rightWristX);
         difference=floor(leftWristX - rightWristX);
     }   
    
}
function draw(){
    background("grey");
    Fill("red");
    stroke("red");
    square(noseX,noseY,difference);
}