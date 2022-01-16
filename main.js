noseX= "";
noseY= "";
function preload(){
    mustache_image= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas= createCanvas(600, 400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(600, 400);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet Is Working");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x - 40;
        noseY= results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 600, 400);
    image(mustache_image, noseX, noseY, 70, 40);
}
function takesnapshot(){
    save('Project.png');
}