export function calculateWinner(squares, sz) {
  for (let i = 0; i < sz; i++) {
    for (let j = 0; j < sz; j++) {
      if (
        j < sz - 4 &&
        squares[i * sz + j] &&
        squares[i * sz + j] === squares[i * sz + j + 1] &&
        squares[i * sz + j] === squares[i * sz + j + 2] &&
        squares[i * sz + j] === squares[i * sz + j + 3] &&
        squares[i * sz + j] === squares[i * sz + j + 4]
      ) {
        return [
          i * sz + j,
          i * sz + j + 1,
          i * sz + j + 2,
          i * sz + j + 3,
          i * sz + j + 4,
        ];
      }
      if (
        i < sz - 4 &&
        squares[i * sz + j] &&
        squares[i * sz + j] === squares[(i + 1) * sz + j] &&
        squares[i * sz + j] === squares[(i + 2) * sz + j] &&
        squares[i * sz + j] === squares[(i + 3) * sz + j] &&
        squares[i * sz + j] === squares[(i + 4) * sz + j]
      ) {
        return [
          i * sz + j,
          (i + 1) * sz + j,
          (i + 2) * sz + j,
          (i + 3) * sz + j,
          (i + 4) * sz + j,
        ];
      }
      if (
        i < sz - 4 &&
        j < sz - 4 &&
        squares[i * sz + j] &&
        squares[i * sz + j] === squares[(i + 1) * sz + j + 1] &&
        squares[i * sz + j] === squares[(i + 2) * sz + j + 2] &&
        squares[i * sz + j] === squares[(i + 3) * sz + j + 3] &&
        squares[i * sz + j] === squares[(i + 4) * sz + j + 4]
      ) {
        return [
          i * sz + j,
          (i + 1) * sz + j + 1,
          (i + 2) * sz + j + 2,
          (i + 3) * sz + j + 3,
          (i + 4) * sz + j + 4,
        ];
      }
      if (
        i < sz - 4 &&
        j > 3 &&
        squares[i * sz + j] &&
        squares[i * sz + j] === squares[(i + 1) * sz + j - 1] &&
        squares[i * sz + j] === squares[(i + 2) * sz + j - 2] &&
        squares[i * sz + j] === squares[(i + 3) * sz + j - 3] &&
        squares[i * sz + j] === squares[(i + 4) * sz + j - 4]
      ) {
        return [
          i * sz + j,
          (i + 1) * sz + j - 1,
          (i + 2) * sz + j - 2,
          (i + 3) * sz + j - 3,
          (i + 4) * sz + j - 4,
        ];
      }
    }
  }
  return null;
}

export function calculateDraw(squares, sz) {
  for (let i = 0; i < sz * sz; i++) {
    if (!squares[i]) {
      return;
    }
  }
  return true;
}
