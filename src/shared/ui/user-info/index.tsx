import { Text, Box, Flex } from ".."

export const UserInfo = () => {
    return (
        <Flex
            filter='drop-shadow(7px 7px 0 black)'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                w='145px'
                h='145px'
                bg='gray'
                borderRadius='999px'
                pos='absolute'
                zIndex={2}
                border='1px solid black'
            />
            <Flex
                bg='white'
                borderRadius='15px'
                p='22px 25px'
                border='1px solid black'
                minW='861px'
                gap='195px'
            >
                <Flex
                    flexDir='column'
                    gap='10px'
                    alignItems='flex-end'
                >
                    <Text fontSize='24px'>
                        Емельянова Елизавета
                    </Text>
                    <Text
                        fontSize='20px'
                        fontWeight='light'
                        mr='5px'
                    >
                        Lizokkkkk_k
                    </Text>
                </Flex>
                <Flex
                    flexDir='column'
                    gap='10px'
                >
                    <Text
                        fontSize='20px'
                        fontWeight='light'
                    >
                        Вы с нами уже
                    </Text>
                    <Text fontSize='24px'>2 года 10 месяцев</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}