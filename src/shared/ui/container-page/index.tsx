import { ReactNode } from 'react'
import { Flex, Heading } from '..'

export const ContainerPage = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <Flex
      w="100%"
      height="100%"
      flexDirection="column"
      alignItems='center'
      overflow='scroll'
    >
      <Heading fontSize='128px' m='20px 0 30px 0'>
        ReGames
      </Heading>
      {children}
    </Flex>
  )
}
