img="";
status="";

function preload()
{
    img = loadImage('bottles.jpeg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#00ff00");
    text("Bottle", 30, 20);
    noFill();
    stroke("#00ff00");
    rect(20, 5, 130, 400);
    fill("#00ff00");
    text("Bottle", 280, 20);
    noFill();
    stroke("#00ff00");
    rect(270, 5, 130, 400);
    fill("#00ff00");
    text("Bottle", 530, 20);
    noFill();
    stroke("#00ff00");
    rect(520, 5, 110, 400);
}

function modelLoaded()
{
    console.log('Model Loaded!');
    status = true;
    objectDetector.detect(img, gotResult);
}

function back()
{
    window.location = "index.html";
}