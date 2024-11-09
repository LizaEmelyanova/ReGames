import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react'

export const Tooltip = ({
  background = 'white',
  color = 'black',
  hasArrow = false,
  ...props
}: TooltipProps) => (
  <ChakraTooltip
    bg={background}
    color={color}
    hasArrow={hasArrow}
    placement="top"
    {...props}
  />
)
