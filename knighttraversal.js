// BFS version to find the shortest knight path
function moveknight(startX, startY, endX, endY) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];
  let que = [[startX, startY, [startX, startY], 0]];
  let visited = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(false);
    }
    visited.push(row);
  }
  visited[startX][startY] = true;
  while (que.length > 0) {
    const [x, y, path, steps] = que.shift();
    if (x === endX && y === endY) {
      return { path, steps };
    } else {
      for (movinsky of moves) {
        let nx = x + movinsky[0];
        let ny = y + movinsky[1];
        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          que.push([nx, ny, [...path, [nx, ny]], steps + 1]);
        }
      }
    }
  }
}

// Example usage
const { path, steps } = moveknight(3, 3, 4, 3);
console.log(path);
console.log("This path took " + steps + " Steps");
