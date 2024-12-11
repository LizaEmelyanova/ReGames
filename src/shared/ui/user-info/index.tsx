import { Text, Box, Flex } from ".."

export const UserInfo = () => {
    return (
        <Flex
            filter='drop-shadow(7px 7px 0 black)'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                w='130px'
                h='130px'
                bg='gray'
                borderRadius='999px'
                pos='absolute'
                zIndex={2}
                border='1px solid black'
            />
            <Flex
                bg='white'
                borderRadius='15px'
                p='20px'
                border='1px solid black'
                minW='861px'
                gap='190px'
                justifyContent='center'
            >
                <Flex
                    flexDir='column'
                    gap='5px'
                    alignItems='flex-end'
                >
                    <Text fontSize='20px'>
                        Емельянова Елизавета
                    </Text>
                    <Text
                        fontSize='18px'
                        fontWeight='light'
                        mr='5px'
                    >
                        Lizokkkkk_k
                    </Text>
                </Flex>
                <Flex
                    flexDir='column'
                    gap='5px'
                    mr='30px'
                >
                    <Text
                        fontSize='18px'
                        fontWeight='light'
                    >
                        Вы с нами уже
                    </Text>
                    <Text fontSize='22px'>2 года 10 месяцев</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}