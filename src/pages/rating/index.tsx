import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import {
    ContainerPage,
    RatingCard,
    Text,
    Flex,
} from "shared/ui"

const Rating = () => {
    const navigate = useNavigate()

    const users = [
        {num: 1, nick: 'Пирожок', score: 1670},
        {num: 2, nick: 'Босс', score: 1056},
        {num: 3, nick: 'ЕЕЕЕЕЕ', score: 1007},
        {num: 4, nick: 'kdsjvnsjd', score: 987},
        {num: 5, nick: 'Nika', score: 968},
        {num: 6, nick: 'semen0304', score: 955},
        {num: 7, nick: 'ojkdnv', score: 943},
    ]

    return (
        <ContainerPage exit={() => navigate(PageRoutes.Profile)}>
            <Flex
                w='100%'
                p='0 250px'
                flexDir='column'
                alignItems='center'
            >
                <Text fontSize='32px' mb='30px'>Турнирная таблица</Text>
                <RatingCard
                    num={38}
                    nick="Я"
                    score={450}
                    isMe
                />
                <Flex
                    flexDir='column'
                    mt='30px'
                    gap='10px'
                >
                    {users.map((user) => (
                        <RatingCard
                            num={user.num}
                            nick={user.nick}
                            score={user.score}
                        />
                    ))}
                </Flex>
            </Flex>
        </ContainerPage>
    )
}

export default Rating