import { Loading } from 'shared/iconpack'
import {
    Card,
    CardBody,
    Flex,
    Text
} from '..'

export const LoadingCard = () => {
    return (
        <Card
            direction='column'
            overflow='hidden'
            border='1px solid black'
            borderRadius='10px'
            bgColor='violet.200'
            filter='drop-shadow(7px 7px 0 black)'
        >
            <CardBody>
                <Flex
                    flexDir='column'
                    gap='40px'
                    alignItems='center'
                >
                    <Text
                        color='white'
                        fontSize='30px'
                    >
                        Новые игры
                    </Text>
                    <Loading />
                    <Text
                        color='white'
                        fontSize='30px'
                    >
                        Скоро
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}