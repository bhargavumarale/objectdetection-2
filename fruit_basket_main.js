img="";
status="";

function preload()
{
    img = loadImage('fruit_basket.jpeg')
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
    text("Banana", 205, 115);
    noFill();
    stroke("#00ff00");
    rect(200, 100, 290, 150);

    fill("#00ff00");
    text("Bowl", 105, 300);
    noFill();
    stroke("#00ff00");
    rect(100, 280, 450, 130);
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