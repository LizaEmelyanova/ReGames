import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Ring, RedSquare, Circle, PinkSquare, Star, BlueCircle } from 'shared/iconpack'

export const PasswordRecoveryLayout = ({ children }: { children: ReactNode }) => (
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
    <Circle style={{ position: 'absolute', top: '-638px', left: '-351px', width: '831px', height: '831px', strokeWidth: '1', zIndex: -1 }} />
    <BlueCircle style={{ position: 'absolute', top: '56px', right: '-144px', width: '368px', height: '368px', strokeWidth: '.5', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '28px', right: '76px', width: '78px', height: '78px', strokeWidth: '1.5', zIndex: -1 }} />
      {children}
    <PinkSquare style={{ position: 'absolute', bottom: '223px', left: '82px', width: '94px', height: '94px', strokeWidth: '2', zIndex: -1, transform: 'rotate(28deg)' }} />
    <Ring style={{ position: 'absolute', bottom: '-220px', left: '24px', width: '398px', height: '398px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', bottom: '95px', left: '236px', width: '100px', height: '100px', strokeWidth: '1.5', zIndex: -1 }} />
    <RedSquare style={{ position: 'absolute', bottom: '-46px', right: '132px', width: '162px', height: '162px', strokeWidth: '.5', zIndex: -1, transform: 'rotate(-9deg)' }} />
  </Flex>
)