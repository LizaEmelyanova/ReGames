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

function RecoveryForm({
    setCode
}: {
    setCode: () => void
}) {
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
                            Ник/почта
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
                        bg='violet.200'
                        _hover={{
                            bg: 'violet.300'
                        }}
                        onClick={setCode}
                    >
                        Отправить
                    </Button>
                </Flex>
            </chakra.form>
        </Box>
    )
}

export { RecoveryForm }