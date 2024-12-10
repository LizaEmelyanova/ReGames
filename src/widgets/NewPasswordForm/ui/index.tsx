import { useNavigate } from 'react-router-dom'
import { PageRoutes } from 'shared/config/pages'
import {
    Text,
    Flex,
    chakra,
    FormControl,
    Input,
    FormErrorMessage,
    FormLabel,
    Box,
    Button,
} from 'shared/ui'

function NewPasswordForm() {
    const navigate = useNavigate()

    return (
        <Box mt='-20px'>
            <Text
                textAlign='center'
                fontSize='26px'
                mb='7px'
            >
                Восстановление пароля
            </Text>
            <chakra.form>
                <Flex
                    bg='pink.100'
                    p='25px 30px'
                    flexDir='column'
                    borderRadius='12px'
                    border='1px solid black'
                    boxShadow='7px 7px 0 black'
                    gap='10px'
                    alignItems='center'
                >
                    <FormControl>
                        <FormLabel
                          htmlFor="last_name"
                          fontSize={'16px'}
                          fontWeight={400}
                          color='black'
                          m='0 0 5px 5px'
                        >
                            Проверочный код
                        </FormLabel>
                        <Input
                          id="last_name"
                          name="last_name"
                          type={'text'}
                        //   value={formik.values.last_name}
                        />
                        <FormErrorMessage>
                            {/* {formik.errors.last_name} */}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel
                          htmlFor="last_name"
                          fontSize={'16px'}
                          fontWeight={400}
                          color='black'
                          m='0 0 5px 5px'
                        >
                            Новый пароль
                        </FormLabel>
                        <Input
                          id="last_name"
                          name="last_name"
                          type={'text'}
                        //   value={formik.values.last_name}
                        />
                        <FormErrorMessage>
                            {/* {formik.errors.last_name} */}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel
                          htmlFor="last_name"
                          fontSize={'16px'}
                          fontWeight={400}
                          color='black'
                          m='0 0 5px 5px'
                        >
                            Повторите пароль
                        </FormLabel>
                        <Input
                          id="last_name"
                          name="last_name"
                          type={'text'}
                        //   value={formik.values.last_name}
                        />
                        <FormErrorMessage>
                            {/* {formik.errors.last_name} */}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        mt='15px'
                        bg='blue.100'
                        _hover={{
                            bg: 'blue.200'
                        }}
                        onClick={() => navigate(PageRoutes.Login)}
                    >
                        Отправить
                    </Button>
                </Flex>
            </chakra.form>
        </Box>
    )
}

export { NewPasswordForm }