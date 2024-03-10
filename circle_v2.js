var NUM_CIRCLES = 15;
var MIN_RADIUS = 10;
var MAX_RADIUS = 40;
var DELAY = 1000; // 1 second in milliseconds
var i = 0;

// Initialize an array to store the circles
var circles = [];

function draw() {
    for (var i = 0; i < NUM_CIRCLES; i++) {
        setTimeout(buildCircles, i * DELAY); // Delay increases with each iteration
    }
}

function buildCircles() {
    var circle = new Circle(Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS));
    var x = Randomizer.nextInt(MIN_RADIUS, getWidth() - MAX_RADIUS);
    var y = Randomizer.nextInt(MIN_RADIUS, getHeight() - MAX_RADIUS);
    updateColor(circle);
    circle.setPosition(x, y);
    add(circle);

    // Update the color of all existing circles
    for (var j = 0; j < circles.length; j++) {
        circles[j].setColor(circle.getColor());
    }

    // Add the new circle to the array
    circles.push(circle);
}

function updateColor(circle) {
    var colors = Randomizer.nextColor();
    circle.setColor(colors);
}

draw();