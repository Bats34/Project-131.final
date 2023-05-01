img="";
status="";

function preload() {
    imgz=loadImage('picture_3.jpg');

}
function setup() {
    canvas=createCanvas(500,430);
    canvas.position(410,230);
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model has loaded!!");
    status=true;
    objectDetector.detect(img,gotResult);
}
function draw() {
    image(imgz,0,0,500,430);
}