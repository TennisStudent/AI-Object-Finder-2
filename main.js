status = "";
function setup()
{
    canvas = createCanvas(550, 450);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
}
function draw()
{
    image(video, 0, 0, 550, 450);
}
function start()
{
     object_detection = ml5.objectDetector('cocossd', modelLoaded);
     docuent.getElementById("status").innerHTML = "Status: Detecting Objects";
     input = document.getElementById("name").value;
}
function modelLoaded()
{
    console.log("Cocossd is initialized!");
    status = true;
}