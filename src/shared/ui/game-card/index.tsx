import {
    Card,
    CardFooter,
    Image,
    Text,
    Flex,
    PlayButton,
} from '..'
import { GameData } from 'entities/games/types'
import { useNavigate } from 'react-router-dom'

export const GameCard = ({
    title,
    image,
    btnColor,
    btnBgColor,
    link
}: GameData) => {
    const navigate = useNavigate()

    return (
        <Card
            direction='column'
            overflow='hidden'
            border='1px solid black'
            borderRadius='10px'
            filter='drop-shadow(7px 7px 0 black)'
        >
            <Image
                objectFit='cover'
                src={image}
                alt={title}
            />
            <CardFooter
                borderTop='1px solid black'
                p='14px 20px'
            >
                <Flex
                    w='100%'
                    gap='60px'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Text
                        fontSize='32px'
                    >
                        {title}
                    </Text>
                    <Flex>
                        <PlayButton
                            color={btnColor}
                            bgColor={btnBgColor}
                            onClick={() => navigate(link)}
                        />
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    )
}