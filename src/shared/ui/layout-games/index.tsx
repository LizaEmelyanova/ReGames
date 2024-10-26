import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Ring, RedSquare, Circle, PinkSquare, Star } from 'shared/iconpack'

export const GameLayout = ({ children }: { children: ReactNode }) => (
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
    <Ring style={{ position: 'absolute', top: '-95px', left: '-115px', width: '288px', height: '288px', strokeWidth: '1.5', zIndex: -1 }} />
    <Star style={{ position: 'absolute', top: '146px', left: '36px', width: '53px', height: '53px', strokeWidth: '2', zIndex: -1 }} />
    <PinkSquare style={{ position: 'absolute', top: '193px', right: '-10px', width: '125px', height: '125px', strokeWidth: '2', zIndex: -1, transform: 'rotate(11deg)' }} />
      {children}
    <Circle style={{ position: 'absolute', bottom: '-611px', left: '-560px', width: '831px', height: '831px', strokeWidth: '1', zIndex: -1 }} />
    <RedSquare style={{ position: 'absolute', bottom: '-34px', right: '-58px', width: '117px', height: '117px', strokeWidth: '0.5', zIndex: -1, transform: 'rotate(162deg)' }} />
    <Star style={{ position: 'absolute', bottom: '53px', right: '22px', width: '53px', height: '53px', strokeWidth: '2', zIndex: -1 }} />
  </Flex>
)