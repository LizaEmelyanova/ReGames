import {
    Flex,
    Text,
    Button
} from 'shared/ui'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from 'shared/config/pages'

export const GameOverModal = ({
    message,
    score,
    onRestart
}: {
    message: string
    score: number
    onRestart: () => void
}) => {
    const navigate = useNavigate()

    return (
        <Flex
            p='30px 105px'
            bg='white'
            borderRadius='12px'
            border='1px solid black'
            box-shadow='5px 5px 0px 0px black'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            pos='absolute'
        >
            <Text fontSize='24px' mb='20px'>{message}</Text>
            <Text fontSize='14px' mb='40px'>Вы набрали {score} баллов</Text>
            <Flex gap='10px'>
                <Button
                    bg='transparent'
                    color='black'
                    border='none'
                    onClick={() => navigate(PageRoutes.Games)}
                >
                    Выйти
                </Button>
                <Button
                    bg='violet.200'
                    _hover={{
                      bg: 'violet.300'
                    }}
                    _active={{
                      bg: 'violet.300'
                    }}
                    onClick={onRestart}
                >
                    Играть
                </Button>
            </Flex>
        </Flex>
    )
} 