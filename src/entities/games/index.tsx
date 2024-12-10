import { GameData } from "./types"

export const gamesList: GameData[] = [
    {
        id: '0',
        title: 'Тетрис',
        image: '/games/tetris.png',
        btnColor: 'yellow.100',
        btnBgColor: 'green.100',
        link: '/saper',
    },
    {
        id: '1',
        title: 'Змейка',
        image: './games/snake.png',
        btnColor: 'yellow.100',
        btnBgColor: 'red.100',
        link: '/snake',
    },
    {
        id: '2',
        title: 'X/O',
        image: './games/tictactoe.png',
        btnColor: 'violet.200',
        btnBgColor: 'blue.100',
        link: '/saper',
    },
    {
        id: '3',
        title: 'Судоку',
        image: './games/sudoku.png',
        btnColor: 'blue.100',
        btnBgColor: 'pink.100',
        link: '/saper',
    },
    {
        id: '4',
        title: 'Сапер',
        image: './games/sapper.png',
        btnColor: 'pink.100',
        btnBgColor: 'violet.200',
        link: '/saper',
    },
]