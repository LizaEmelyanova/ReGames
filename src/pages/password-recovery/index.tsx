import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import {
    ContainerPage,
    Flex,
    Text,
    Button,
} from "shared/ui"
import { NewPasswordForm, RecoveryForm } from "widgets/index"

const PasswordRecovery = () => {
    const navigate = useNavigate()

    const [code, setCode] = useState(false)

    return (
        <ContainerPage>
            <Flex h='100%' flexDir='column' justifyContent='center'>
                {!code ? (
                    <>
                        <RecoveryForm setCode={() => setCode(true)} />
                        <Flex
                            mt='20px'
                            alignItems='center'
                            justifyContent='center'
                            gap='15px'
                        >
                            <Text fontSize='20px'>
                                Хотите вернуться назад?
                            </Text>
                            <Button
                                bg='blue.100'
                                _hover={{
                                    bg: 'blue.200'
                                }}
                                onClick={() => navigate(PageRoutes.Login)}
                            >
                                Выйти
                            </Button>
                        </Flex>
                    </>
                ) : (
                    <NewPasswordForm />
                )}
            </Flex>
        </ContainerPage>
    )
}

export default PasswordRecovery