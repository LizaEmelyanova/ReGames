import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import { ContainerPage, Flex, UserInfo } from "shared/ui"
import { StatisticInfo } from "widgets/index"

const Profile = () => {
    const navigate = useNavigate()

    return (
        <ContainerPage exit={() => navigate(PageRoutes.Games)}>
            <Flex
                h='100%'
                flexDir='column'
                justifyContent='center'
                gap='50px'
            >
                <UserInfo />
                <StatisticInfo />
            </Flex>
        </ContainerPage>
    )
}

export default Profile