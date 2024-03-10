var NUM_CIRCLES = 15;
var MIN_RADIUS = 10;
var MAX_RADIUS = 40;
var DELAY = 500;
var i = 0

function draw(){
    for(var i = 0; i < NUM_CIRCLES; i++){
    //setTimer(buildCircles, DELAY);
    //buildCircles();
    setTimeout(buildCircles, i * DELAY); // Delay increases with each iteration
    console.log(i);
    }
}

function buildCircles(){
        circle = new Circle(Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS));
        var x = Randomizer.nextInt(MIN_RADIUS, getWidth() - MAX_RADIUS);
        var y = Randomizer.nextInt(MIN_RADIUS, getHeight()- MAX_RADIUS);
        updateColor();
        circle.setPosition(x, y); 
        add(circle);
    }

function updateColor(){
    var colors = Randomizer.nextColor();
    circle.setColor(colors);
}

draw();