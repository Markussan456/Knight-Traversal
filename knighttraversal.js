let board = [];
for (let y = 0; y < 8; y++) {
  let row = [];
  for (let x = 0; x < 8; x++) {
    row.push([x, y]);
  }
  board.push(row);
}
let movenumber = 0;
let usedmoves = [];
function moveknight(x, y, endx, endy) {
  if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) return false; //checks if path is available
  if (x === endx && y === endy) {
    console.log("Reached point");
    return true;
  }
  movenumber++; //increments
  usedmoves.push([x, y]);
  let possiblemoves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y - 2],
  ];
  let allowedmoves = [];
  for (let i = 0; i < possiblemoves.length; i++) {
    if (
      possiblemoves[i][0] >= 0 && //checks which paths are available
      possiblemoves[i][0] < 8 &&
      possiblemoves[i][1] >= 0 &&
      possiblemoves[i][1] < 8
    ) {
      allowedmoves.push(possiblemoves[i]); //then adds the available ones to the allowedmoves que
    }
  }
  console.log(allowedmoves);
  for (let i = 0; i < allowedmoves.length; i++) {
    //experimental
    moveknight(allowedmoves[i][0], allowedmoves[i][1], endx, endy);
  }
}
moveknight(0, 0);
