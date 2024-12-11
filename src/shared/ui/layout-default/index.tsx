import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  MainLayout,
  GameLayout,
  RegistrationLayout,
  LoginLayout,
  PasswordRecoveryLayout,
  ProfileLayout,
} from '..'
import { useMatch } from 'react-router-dom'
import { PageRoutes } from 'shared/config/pages'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const isMain = useMatch(PageRoutes.MainPage)
  const isGames = useMatch(PageRoutes.Games)
  const isRegistration = useMatch(PageRoutes.Registration)
  const isLogin = useMatch(PageRoutes.Login)
  const isPasswordRecovery = useMatch(PageRoutes.PasswordRecovery)
  const isProfile = useMatch(PageRoutes.Profile)
  const isRating = useMatch(PageRoutes.Rating)
  const isUser = isProfile || isRating

  const isSaper = useMatch(PageRoutes.Saper)
  const isSnake = useMatch(PageRoutes.Snake)
  const isGame = isSaper || isSnake

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
      {isPasswordRecovery && (
        <PasswordRecoveryLayout>
          {children}
        </PasswordRecoveryLayout>
      )}
      {isUser && (
        <ProfileLayout>
          {children}
        </ProfileLayout>
      )}
      {isGame && (
        children
      )}
    </Flex>
  )
}
