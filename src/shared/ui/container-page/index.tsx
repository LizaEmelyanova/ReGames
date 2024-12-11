import { ReactNode } from 'react'
import { Box, Flex, Heading, IconButton, Tooltip } from '..'
import { DefaultAvatar } from 'shared/iconpack'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from 'shared/config/pages'
import { Arrow } from 'shared/iconpack/Arrow'

export const ContainerPage = ({
  avatar = false,
  logo = true,
  exit = false,
  children,
}: {
  avatar?: boolean
  logo?: boolean
  exit?: boolean
  children: ReactNode
}) => {
  const navigate = useNavigate()

  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      alignItems='center'
      overflow='scroll'
      pb='20px'
    >
      <Flex
        w='100%'
        p='0 90px'
        alignItems='center'
        justifyContent='space-between'
      >
        {avatar && (
          <Box w='80px' h='80px' />
        )}
        {exit && (
          <IconButton
            Icon={Arrow}
            onClick={() => navigate(PageRoutes.Games)}
          />
        )}
        {logo && (
          <Heading flex={1} textAlign='center' fontSize='128px'>
            ReGames
          </Heading>
        )}
        {avatar && (
          <Tooltip
            right='80px'
            placement='bottom'
            label='Хочешь сохранить свой результаты и побороться
              за первое место в турнирной таблице, тогда тебе нужно
              зарегестрироваться или войти в уже существующий аккаунт'
          >
            <Box
              cursor='pointer'
              onClick={() => navigate(PageRoutes.Registration)}
            >
              <DefaultAvatar />
            </Box>
          </Tooltip>
        )}
      </Flex>
      {children}
    </Flex>
  )
}
