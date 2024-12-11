import {
    Box,
    Flex,
    Grid,
    Text,
} from ".."

export const ActiveStatistic = () => {
    const day = [
        { color: '' },
        { color: 'violet.200' },
        { color: 'violet.200' },
        { color: 'violet.200' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'violet.200' },
        { color: 'violet.200' },
        { color: 'violet.200' },
        { color: 'violet.200' },
        { color: 'white' },
        { color: 'violet.200' },
        { color: 'white' },
        { color: 'violet.200' },
        { color: 'violet.200' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
        { color: 'white' },
    ]

    return (
        <Flex
            bg='blue.100'
            border='1px solid black'
            filter='drop-shadow(7px 7px 0 black)'
            flexDir='column'
            alignItems='center'
            borderRadius='15px'
            gap='23px'
            p='15px 53px'
        >
            <Text fontSize='20px'>Место в рейтинге</Text>
            <Grid
                gridTemplateColumns={'repeat(7, 1fr)'}
                gridColumnGap='10px'
                gridRowGap='7px'
            >
                {day.map((item) => (
                    <Box
                        w='30px'
                        h='30px'
                        borderRadius='999px'
                        bg={item.color}
                        border={item.color && '1px solid black'}
                    />
                ))}
            </Grid>
        </Flex>
    )
}