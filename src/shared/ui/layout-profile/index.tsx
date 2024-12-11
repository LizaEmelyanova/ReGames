import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Star } from 'shared/iconpack'

export const ProfileLayout = ({ children }: { children: ReactNode }) => (
  <Flex
    w="100vw"
    h="100vh"
    direction="column"
    position="relative"
    alignItems="center"
    justifyContent="center"
    background="transparent"
    zIndex={0}
  >
    <Star style={{ position: 'absolute', top: '260px', left: '42px', width: '53px', height: '53px', strokeWidth: '1.5', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '47px', right: '83px', width: '78px', height: '78px', strokeWidth: '1.5', zIndex: -1 }} />
      {children}
    <Star style={{ position: 'absolute', bottom: '-23px', right: '-25px', width: '90px', height: '90px', strokeWidth: '1.5', zIndex: -1 }} />
  </Flex>
)