import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export const Input = ({
  w = '400px',
  h = '35px',
  color = 'black',
  bg = 'white',
  borderColor = 'black',
  _placeholder = { color: 'gray.700' },
  _hover = {
    bg: 'white',
    borderColor: 'black',
    boxShadow: 'none',
  },
  _focus = {
    bg: 'white',
    borderColor: 'black',
    boxShadow: 'none',
  },
  ...props
}: InputProps) => (
  <ChakraInput
    w={w}
    h={h}
    color={color}
    bg={bg}
    borderColor={borderColor}
    _placeholder={_placeholder}
    _hover={_hover}
    _focus={_focus}
    {...props}
  />
)
