// p5 file

console.log("this is script.js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    background(102, 153, 255);

    fill(102, 0, 102);
    textFont('Helvetica');
    textSize(12);
    text('click for fun colors', 600, 20);
    text('press enter for a new background', 600, 30);
    text('press shift for a fortune', 600, 40);
}

function draw() {
    ellipse(mouseX, mouseY, 10, 10);
    fill(mouseY);
    noStroke();
    if (mouseIsPressed) {
        fill(random(204, 255), random(0, 150), random(100, 255));
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        background(0, random(51, 102), random(102, 204));

        fill(255, random(153, 255), random(0, 103))
        textSize(12);
        text('click for fun colors', 600, 20);

        textSize(12);
        text('press enter for a new background', 600, 30);

        textSize(12);
        text('press shift for a fortune', 600, 40);
    }

    if (keyCode === SHIFT) {
        background(0, random(51, 102), random(102, 204));
        fill(255);
        textSize(14);
        textStyle(ITALIC);
        var words = ["Someone loves you very much!", "You're going to have a great day!", "You deserve to take care of yourself - today and everyday!", "Maybe today won't be such a great day, but you'll get through it!", "How much great music did we miss out on because The Jonas Brothers broke up?", "It might rain today, or maybe it'll be sunny!"];
        var word = random(words);
        text(word, 10, 240);

        textStyle(NORMAL);
        fill(255, random(153, 255), random(0, 103))
        textSize(12);
        text('click for fun colors', 600, 20);

        textSize(12);
        text('press enter for a new background', 600, 30);

        textSize(12);
        text('press shift for a fortune', 600, 40);
    }
}
