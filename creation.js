const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// BACKGROUND (Ground)
ctx.fillStyle = "#7cfc00"; 
// Grass green
ctx.fillRect(0, 300, 600, 100);

// THE SUN
ctx.beginPath();
ctx.arc(500, 70, 40, 0, Math.PI * 2);
 // Circle at (500, 70)
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

//THE HOUSE (Main Structure)
ctx.fillStyle = "#b22222"; 
// Firebrick red
ctx.fillRect(150, 200, 150, 150);
ctx.strokeRect(150, 200, 150, 150);

//THE ROOF (Using moveTo and lineTo)
ctx.beginPath();
// Left corner
ctx.moveTo(150, 200);  
// Peak
ctx.lineTo(225, 120);  
// Right corner
ctx.lineTo(300, 200);  

ctx.closePath();
ctx.fillStyle = "#4b2e2e";
ctx.fill();
ctx.stroke();

// DOOR AND WINDOWS
// White door
ctx.fillStyle = "#fff"; 
// Door
ctx.fillRect(200, 270, 40, 80); 
// left Window
ctx.fillStyle = "#ADD8E6"; 
ctx.fillRect(170, 220, 30, 30);
ctx.strokeRect(170, 220, 30, 30);

//Right window
ctx.fillStyle = "#ADD8E6";
ctx.fillRect(250, 220, 30, 30); // Positioned at X=250 to balance the house
ctx.strokeRect(250, 220, 30, 30);

//FOR LOOP WITH TRANSLATE (The Fence)
ctx.strokeStyle = "#4b2e2e";
ctx.lineWidth = 4;

for (let i = 0; i < 10; i++) {
    // Save state before translate
    ctx.save(); 
    
    // Move 30px right for each iteration
    ctx.translate(i * 30, 0); 
    
    
    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 310);
    ctx.stroke();
    
    ctx.restore(); // Restore to origin
}

// CAPTION TEXT
ctx.font = "20px Georgia";
ctx.fillStyle = "black";
ctx.fillText("My Farm House", 20, 50);
