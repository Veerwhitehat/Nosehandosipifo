function setup() {

    video= createCapture(VIDEO);
    video.size(400,400);
    canvas= createCanvas(400,400);
    canvas.position(550,200);
    poseNet= ml5.poseNet(Video,modelloaded);
    poseNet.on('pose',gotPoses);
    
    
}
function modelloaded() {

    console.log("PoseNet Model is washed in the latest washing machine in the world anyone wants to wear it, it is washed fully and wear it with tie, it looks more good");
    
}

function draw() {
    
    background("green");

}

function gotPoses(results) {

if (results.length > 0 ) {
    
    console.log(results);

}
    
}