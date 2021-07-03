canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


rover_width = 100;
rover_height = 90;
rover_X = 10;
rover_Y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add() {
    background_img_Tag = new Image();
    background_img_Tag.onload = uploadBackground;
    background_img_Tag.src = background_image;

    rover_img_Tag = new Image();
    rover_img_Tag.onload = uploadrover;
    rover_img_Tag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_img_Tag, 0, 0, canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_img_Tag, rover_X, rover_Y, rover_width, rover_height);

}
window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }

}

function up() {
    if (rover_Y >= 0) {
        rover_Y = rover_Y - 10;
        console.log("when up arrow is pressed, x =" + rover_X + "|y= " + rover_Y);
        uploadBackground();
        uploadrover();

    }
}
function down() {
    if (rover_Y < 500) {
        rover_Y = rover_Y + 10;
        console.log("when down arrow is pressed, x =" + rover_X + "|y= " + rover_Y);
        uploadBackground();
        uploadrover();

    }
}
function left() {
    if (rover_X >= 0) {
        rover_X = rover_X - 10;
        console.log("when left arrow is pressed, x =" + rover_X + "|y= " + rover_Y);
        uploadBackground();
        uploadrover();

    }
}
function right() {
    if (rover_X < 700) {
        rover_X = rover_X + 10;
        console.log("when right arrow is pressed, x =" + rover_X + "|y= " + rover_Y);
        uploadBackground();
        uploadrover();

    }
}