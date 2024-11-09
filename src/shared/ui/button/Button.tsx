import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({
  color='white',
  px='30px',
  children,
  ...props
}: ButtonProps) => (
  <ChakraButton
    color={color}
    px={px}
    {...props}
  >
    {children}
  </ChakraButton>
)
