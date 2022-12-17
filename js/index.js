// 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const grid = 48; 
const gridGap = 10;

// draw the game background
// start zone
ctx.fillStyle = 'gray';
ctx.fillRect(0, 2 * grid, canvas.width, grid * 12);

// road
ctx.fillStyle = 'black';
ctx.fillRect(0, grid, canvas.width, grid * 11.5);

// water 
ctx.fillStyle = 'blue';
ctx.fillRect(0, grid, canvas.width, grid * 6);

// grass
ctx.fillStyle = 'green';
ctx.fillRect(0, 7 * grid, canvas.width, grid);
  
 // end bank
 ctx.fillStyle = 'brown';
 ctx.fillRect(0, grid, canvas.width, 10);
 ctx.fillRect(0, grid, 5, grid);
 ctx.fillRect(canvas.width - 4, grid, 4, grid);
 for (let i = 0; i < 8; i++) {
   ctx.fillRect(grid + grid * 4 * i, grid, grid * 2, grid);
 }
