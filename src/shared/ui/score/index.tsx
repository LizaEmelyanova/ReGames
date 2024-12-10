import { Text, chakra } from ".."

export const Score = ({score}: {score: number}) => {
    return (
        <Text fontSize='40px' mb='38px'>
            Баллы <chakra.span fontWeight={'bold'}>{score}</chakra.span>
        </Text>
    )
}