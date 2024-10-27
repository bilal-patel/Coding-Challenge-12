// task 2 , 3 and 4 there, but moved location for better event handling


//Task 2 - Configure the JavaScript for Drawing Context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false, startX, startY;
let selectedTool = 'line'; // Default tool
ctx.strokeStyle = '#000000'; // default color


/// moving t4 up for better event handliig logic
// TASK 4 - Add Color Selection and Canvas Clearing
document.querySelectorAll('input[name="shape"]').forEach(radio =>

    radio.onchange = () => selectedTool = radio.value); 
    
    
    //changes thr tool^^

document.getElementById('color-picker').oninput = (e) => ctx.strokeStyle = e.target.value; 

//update the color ^^

// t4 - Canvas clearing functionality
// Clear canvas button
document.getElementById('clear-button').onclick = () => 
    ctx.clearRect(0, 0, canvas.width, canvas.height);


//clears canvas^^^^


//T2 - mouse events for drawing 

canvas.onmousedown = (e) => {
    drawing = true; [startX, startY] = [e.offsetX, e.offsetY];
};
canvas.onmousemove = (e) => {
    if (!drawing) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // seee the shape

    drawShape(e.offsetX, e.offsetY);};

canvas.onmouseup = () => drawing = false; //using mouse method 

// task3 - Implement Shape Drawing Logic

// Draw the selected shape 
function drawShape(x, y) {

    ctx.beginPath();// start with nothing

    if (selectedTool === 'line') ctx.moveTo(startX, startY), 


    ctx.lineTo(x, y); // use if else for shape drawing
    else if (selectedTool === 'rectangle') 

        ctx.rect(startX, startY, x - startX, y - startY); // draw rec

    else ctx.arc(startX, startY, 

        Math.hypot(x - startX, y - startY), 0, 2 * Math.PI); // draw cir
    ctx.stroke();
}

// task 2 , 3 