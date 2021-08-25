img="";
status="";

function preload()
{
    img = loadImage('bedroom.jpeg')
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
    text("Bed", 200, 230);
    noFill();
    stroke("#FF0000");
    rect(190, 200, 300, 200);
    fill("#FF0000");
    text("Chair", 515, 250)
    noFill();
    stroke("#FF0000");
    rect(510, 230, 100, 100);
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