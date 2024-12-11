import { ContainerPage, Flex, UserInfo } from "shared/ui"
import { StatisticInfo } from "widgets/index"


const Profile = () => {
    return (
        <ContainerPage exit>
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