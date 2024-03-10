
setTimer(function() {
    let circle = new Circle(10);
    circle.setPosition(
        Randomizer.nextInt(getWidth()),
        Randomizer.nextInt(getHeight())
    );
    circle.setColor(Randomizer.nextColor());
    add(circle);
}, 100);
