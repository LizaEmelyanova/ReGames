import {
    ContainerPage,
    Flex,
    Text,
    Button,
} from "shared/ui"
import { RegistrationForm } from "widgets/index"
import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"

const Registration = () => {
    const navigate = useNavigate()

    return (
        <ContainerPage>
            <RegistrationForm />
            <Flex
                mt='20px'
                alignItems='center'
                justifyContent='center'
                gap='20px'
            >
                <Text fontSize='20px'>
                    Уже есть аккаунт?
                </Text>
                <Button
                    bg='violet.200'
                    _hover={{
                        bg: 'violet.300'
                    }}
                    onClick={() => navigate(PageRoutes.Login)}
                >
                    Войти
                </Button>
            </Flex>
        </ContainerPage>
    )
}

export default Registration