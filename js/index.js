// 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const grid = 48; // 1 = 48px
const gridGap = 10;

// draw the game background
// start zone
ctx.fillStyle = 'gray';
ctx.fillRect(0, grid, canvas.width, grid * 14);

// road zone
ctx.fillStyle = 'black';
ctx.fillRect(0, grid, canvas.width, grid * 12);


// water zone 
ctx.fillStyle = 'blue';
ctx.fillRect(0, grid, canvas.width, grid * 6);

// grass zone
ctx.fillStyle = 'green';
ctx.fillRect(0, 7 * grid, canvas.width, grid);
  
 // end zone
ctx.fillStyle = 'brown';
ctx.fillRect(0, grid, canvas.width, grid * -1);
ctx.fillRect(0, grid, canvas.width, 0);
ctx.fillRect(0, grid, 5, grid);
ctx.fillRect(canvas.width - 4, grid, 4, grid);
 for (let i = 0; i < 5; i++) {
   ctx.fillRect(grid + grid * 4 * i, grid, grid * 2, grid);
 }


