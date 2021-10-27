var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('mycanvas');
ctx= canvas.getcontext("2d");
color="black";
width_of_line=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e){
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y= e.clientY- canvas.offsetTop;
}
if(mouseEvent== "mousedown"){
    ctx.beginpath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width_of_line;
  
    console.log("last position of x and y coordinates =");
    console.log("x =" +  current_position_of_mouse_x)
}

