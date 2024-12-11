import { Flex, Text } from ".."

export const RankingPlace = () => {
    return (
        <Flex
            bg='pink.100'
            border='1px solid black'
            filter='drop-shadow(7px 7px 0 black)'
            flexDir='column'
            alignItems='center'
            borderRadius='15px'
            gap='5px'
            p='0 108px 15px'
        >
            <Text
                fontSize='64px'
                fontWeight='semibold'
            >
                38
            </Text>
            <Text fontSize='20px'>Место в рейтинге</Text>
        </Flex>
    )
}