import { Flex } from ".."
import { TrianglePlay } from "shared/iconpack"
import { useTheme } from "@chakra-ui/react"

export const PlayButton = ({
    color,
    bgColor,
    onClick
}: {
    color: string
    bgColor: string
    onClick: () => void
}) => {
    const theme = useTheme()
    const colorParams = color.split('.')
    const colorName = colorParams[0]
    const colorNum = colorParams[1]
    const currentColor = theme.colors[`${colorName}`][`${colorNum}`]
    return (
        <Flex
            w='45px'
            h='45px'
            alignItems='center'
            justifyContent='end'
            pr='8px'
            borderRadius='100%'
            border='1px solid black'
            bgColor={bgColor}
            onClick={onClick}
            cursor='pointer'
            _hover={{
                filter: 'grayscale(15%)'
            }}
        >
            <TrianglePlay color={currentColor} />
        </Flex>
    )
}