import { Flex, GameCard, Text } from ".."

export const FavoriteGame = () => {
    const game = {
        id: '2',
        title: 'X/O',
        image: './games/tictactoe.png',
        btnColor: 'violet.200',
        btnBgColor: 'blue.100',
        link: '/saper',
    }
    return (
        <Flex
            bg='green.100'
            border='1px solid black'
            filter='drop-shadow(7px 7px 0 black)'
            flexDir='column'
            alignItems='center'
            borderRadius='15px'
            gap='30px'
            p='30px 174px 50px'
        >
            <Text fontSize='20px'>Любимая игра</Text>
            <GameCard {...game} />
        </Flex>
    )
}