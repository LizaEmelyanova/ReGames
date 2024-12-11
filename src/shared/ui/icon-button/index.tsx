import { Box, Flex } from ".."
import { SVGProps } from 'react'

export const IconButton = ({
    Icon,
    onClick,
}: {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    onClick: () => void
}) => {
    return (
        <Box
            w='60px'
            h='60px'
            bg='white'
            borderRadius='999px'
            border='1px solid black'
            cursor='pointer'
            _hover={{
                bg: '#E5E5E5'
            }}
            onClick={onClick}
        >
            <Flex
                w='100%'
                h='100%'
                justifyContent='center'
                alignItems='center'
            >
                <Icon />
            </Flex>
        </Box>
    )
}