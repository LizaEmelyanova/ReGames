import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Ring, RedSquare, Circle, PinkSquare, Star } from 'shared/iconpack'

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
    <Circle style={{ position: 'absolute', top: '-656px', right: '-240px', width: '831px', height: '831px', strokeWidth: '1', zIndex: -1 }} />
    <PinkSquare style={{ position: 'absolute', top: '100px', right: '-100px', width: '207px', height: '207px', strokeWidth: '1', zIndex: -1, transform: 'rotate(20deg)' }} />
    <Star style={{ position: 'absolute', top: '-44px', right: '245px', width: '110px', height: '110px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '295px', right: '45px', width: '55px', height: '55px', strokeWidth: '2', zIndex: -1 }} />
      {children}
    <Ring style={{ position: 'absolute', bottom: '-223px', left: '-122px', width: '478px', height: '478px', strokeWidth: '1', zIndex: -1 }} />
    <RedSquare style={{ position: 'absolute', bottom: '360px', left: '80px', width: '75px', height: '75px', strokeWidth: '1', zIndex: -1, transform: 'rotate(55deg)' }} />
    <Star style={{ position: 'absolute', bottom: '65px', left: '254px', width: '100px', height: '100px', strokeWidth: '1.5', zIndex: -1 }} />
  </Flex>
)