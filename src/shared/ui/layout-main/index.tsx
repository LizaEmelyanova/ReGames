import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Ring, RedSquare, Circle, PinkSquare } from 'shared/iconpack'

export const MainLayout = ({ children }: { children: ReactNode }) => (
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
    <Circle style={{ position: 'absolute', top: '-656px', right: '-240px', width: '831px', height: '831px', zIndex: -1 }} />
    <PinkSquare style={{ position: 'absolute', top: '100px', right: '-100px', width: '207px', height: '207px', zIndex: -1, transform: 'rotate(20deg)' }} />
        {children}
    <Ring  style={{ position: 'absolute', bottom: '-223px', left: '-122px', width: '478px', height: '478px', zIndex: -1 }} />
    <RedSquare  style={{ position: 'absolute', bottom: '360px', left: '80px', width: '75px', height: '75px', zIndex: -1, transform: 'rotate(55deg)' }} />
  </Flex>
)