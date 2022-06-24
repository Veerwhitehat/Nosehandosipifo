noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;


function setup() {

    video= createCapture(VIDEO);
    video.size(400,400);
    canvas= createCanvas(400,400);
    canvas.position(800,200);
    poseNet= ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
    
    
}
function modelloaded() {

    console.log("PoseNet Model is washed in the latest washing machine in the world anyone wants to wear it, it is washed fully and wear it with tie, it looks more good");
    
}

function draw() {
    
    background("green");
    fill("aqua");
    stroke("black");
   
    label(noseX, noseY, difference, "My Name is Veer ");


}

function gotPoses(results) {

    if (results.length > 0 ) {
    
        console.log(results);
    
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        rightwristX=  results[0].pose.rightWrist.x;
        leftwristX=  results[0].pose.leftWrist.x;
        difference= floor(leftwristX-rightwristX);
    
}
}