import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  MainLayout,
  GameLayout,
  RegistrationLayout,
  LoginLayout,
} from '..'
import { useMatch } from 'react-router-dom'
import { PageRoutes } from 'shared/config/pages'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const isMain = useMatch(PageRoutes.MainPage)
  const isGames = useMatch(PageRoutes.Games)
  const isRegistration = useMatch(PageRoutes.Registration)
  const isLogin = useMatch(PageRoutes.Login)
  const isGame = useMatch(PageRoutes.Saper)

  return (
    <Flex
      w="100%"
      h="100%"
      bg='linear-gradient(white, transparent 1px), linear-gradient(90deg, white, transparent 1px), #FFC567'
      bgSize='73px 73px'
      bgPosition='center 30px'
      direction="column"
      position="relative"
      justifyContent="center"
    >
      {isMain && (
        <MainLayout>
          {children}
        </MainLayout>
      )}
      {isGames && (
        <GameLayout>
          {children}
        </GameLayout>
      )}
      {isRegistration && (
        <RegistrationLayout>
          {children}
        </RegistrationLayout>
      )}
      {isLogin && (
        <LoginLayout>
          {children}
        </LoginLayout>
      )}
      {isGame && (
        children
      )}
    </Flex>
  )
}
