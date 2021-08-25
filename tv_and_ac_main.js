img="";
status="";

function preload()
{
    img = loadImage('tvandac.jpeg')
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
    fill("#FF0000");
    text("TV", 250, 200);
    noFill();
    stroke("#FF0000");
    rect(240, 185, 290, 200);
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