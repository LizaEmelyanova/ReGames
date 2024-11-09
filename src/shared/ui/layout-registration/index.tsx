import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Ring, RedSquare, Circle, PinkSquare, Star, BlueCircle } from 'shared/iconpack'

export const RegistrationLayout = ({ children }: { children: ReactNode }) => (
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
    <PinkSquare style={{ position: 'absolute', top: '100px', left: '-50px', width: '175px', height: '175px', strokeWidth: '1', zIndex: -1, transform: 'rotate(40deg)' }} />
    <Star style={{ position: 'absolute', top: '40px', left: '166px', width: '80px', height: '80px', strokeWidth: '1.5', zIndex: -1 }} />
    <Ring style={{ position: 'absolute', top: '-140px', right: '-135px', width: '400px', height: '400px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '343px', right: '140px', width: '53px', height: '53px', strokeWidth: '2.5', zIndex: -1 }} />
      {children}
    <BlueCircle style={{ position: 'absolute', bottom: '150px', left: '300px', width: '250px', height: '250px', strokeWidth: '1', zIndex: -1 }} />
    <Star style={{ position: 'absolute', bottom: '117px', left: '277px', width: '100px', height: '100px', strokeWidth: '1.5', zIndex: -1 }} />
    <RedSquare  style={{ position: 'absolute', bottom: '340px', right: '240px', width: '115px', height: '115px', strokeWidth: '.7', zIndex: -1, transform: 'rotate(70deg)' }} />
    <Circle style={{ position: 'absolute', bottom: '-610px', right: '-318px', width: '831px', height: '831px', strokeWidth: '1', zIndex: -1 }} />
  </Flex>
)