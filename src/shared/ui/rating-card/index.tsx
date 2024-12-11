import {
    Flex,
    Grid,
    Text
} from ".."

export const RatingCard = ({
    num,
    nick,
    score,
    isMe = false
}: {
    num: number
    nick: string
    score: number
    isMe?: boolean
}) => {
    return (
        <Flex
            w='100%'
            bg={!isMe ? 'pink.100' : 'violet.200'}
            borderRadius='15px'
            border='1px solid black'
            filter='drop-shadow(3px 3px 0 black)'
            p='12px 45px'
        >
            <Grid
                w='100%'
                gridTemplateColumns='2fr 17fr 1fr'
            >
                <Text
                    fontSize='24px'
                    fontWeight='semibold'
                    color={isMe ? 'white' : 'black'}
                >
                    {num}
                </Text>
                <Text
                    fontSize='20px'
                    color={isMe ? 'white' : 'black'}
                    mt='4px'
                >
                    {nick}
                </Text>
                <Text
                    fontSize='24px'
                    fontWeight='semibold'
                    color={isMe ? 'white' : 'black'}
                >
                    {score}
                </Text>
            </Grid>
        </Flex>
    )
}