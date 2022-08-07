var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
rover_width = 100
rover_height = 90
rover_y = 10
rover_x = 10
background_image = "mars.jpg"
rover_image = "rover.png"


function add(){
background_image = new Image();
background_image.onload = uploadBackground
background_image.src = background_image

rover_image = new Image();
rover_image.onload = uploadrover
rover_image.src = rover_image
}

function uploadBackground(){
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_image, rover_x, rover_y, rover_width, rover_height)
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keycode
    console.log(keyPressed)
    if(keyPressed == '38'){
        up()
        console.log("up")
    }

    if(keyPressed == '40'){
        down()
        console.log("down")
    }

    if(keyPressed == '37'){
        left()
        console.log("left")
    }

    if(keyPressed == '39'){
        right()
        console.log("right")
    }
}

function up(){

    if(rover_y >= 0){
        rover_y = rover_y - 10
        console.log("When up arrow is pressed, x =" + rover_x + " | y = " + rover_y)
        uploadrover()
        uploadBackground()
    }
}

function down(){

    if(rover_y <= 500){
        rover_y = rover_y + 10
        console.log("When down arrow is pressed, x =" + rover_x + " | y = " + rover_y)
        uploadrover()
        uploadBackground()
    }
}

function left(){

    if(rover_x >= 0){
        rover_x = rover_x - 10
        console.log("When left arrow is pressed, x =" + rover_x + " | y = " + rover_y)
        uploadrover()
        uploadBackground()
    }
}

function right(){

    if(rover_x <= 700){
        rover_x = rover_x + 10
        console.log("When right arrow is pressed, x =" + rover_x + " | y = " + rover_y)
        uploadrover()
        uploadBackground()
    }
}
