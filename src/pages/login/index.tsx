import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import {
    ContainerPage,
    Flex,
    Text,
    Button,
} from "shared/ui"
import { LoginForm } from "widgets/index"

const Login = () => {
    const navigate = useNavigate()

    return (
        <ContainerPage>
            <Flex h='100%' flexDir='column' justifyContent='center'>
                <LoginForm />
                <Flex
                    mt='20px'
                    alignItems='center'
                    justifyContent='center'
                    gap='15px'
                >
                    <Text fontSize='20px'>
                        Ещё нет аккаунта?
                    </Text>
                    <Button
                        bg='blue.100'
                        _hover={{
                            bg: 'blue.200'
                        }}
                        onClick={() => navigate(PageRoutes.Registration)}
                    >
                        Зарегистрироваться
                    </Button>
                </Flex>
            </Flex>
        </ContainerPage>
    )
}

export default Login