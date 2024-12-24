export const TETROMINOS = {
    0: { shape: [[0]], color: 'transparent' },
    I: {
      shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
      color: '85, 44, 184',
    },
    J: {
      shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]],
      color: '144, 51, 200',
    },
    L: {
      shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
      color: '0, 154, 94',
    },
    O: {
      shape: [['O', 'O'], ['O', 'O']],
      color: '252, 125, 168',
    },
    S: {
      shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]],
      color: '198, 33, 112',
    },
    T: {
      shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
      color: '255, 197, 103',
    },
    Z: {
      shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]],
      color: '253, 90, 71',
    },
  };
  
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };