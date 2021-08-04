var nosex = 0;
var nosey = 0;
function preload() {
 clown_nose=loadImage("download.png");
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 350, 350);
    
    image(clown_nose,nosex,nosey,30,30);
}

function take_snapshot() {
    save('myFilterLmage.png');
}