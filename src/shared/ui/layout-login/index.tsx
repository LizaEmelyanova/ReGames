import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Ring, RedSquare, Circle, PinkSquare, Star, BlueCircle } from 'shared/iconpack'

export const LoginLayout = ({ children }: { children: ReactNode }) => (
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
    <Ring style={{ position: 'absolute', top: '52px', left: '-140px', width: '308px', height: '308px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '74px', left: '100px', width: '65px', height: '65px', strokeWidth: '1.5', zIndex: -1 }} />
    <PinkSquare style={{ position: 'absolute', top: '265px', left: '54px', width: '155px', height: '155px', strokeWidth: '1', zIndex: -1, transform: 'rotate(25deg)' }} />
    <BlueCircle style={{ position: 'absolute', top: '-30px', right: '240px', width: '260px', height: '260px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '153px', right: '226px', width: '78px', height: '78px', strokeWidth: '1.5', zIndex: -1 }} />
      {children}
    <Circle style={{ position: 'absolute', bottom: '-650px', left: '-110px', width: '831px', height: '831px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', bottom: '95px', left: '236px', width: '100px', height: '100px', strokeWidth: '1.5', zIndex: -1 }} />
    <RedSquare  style={{ position: 'absolute', bottom: '165px', right: '75px', width: '115px', height: '115px', strokeWidth: '.7', zIndex: -1, transform: 'rotate(70deg)' }} />
  </Flex>
)