import { useNavigate } from 'react-router-dom'
import { Flex, Text } from 'shared/ui'
import { Button } from '@chakra-ui/react'

const ReactError = () => {
  const navigate = useNavigate()
  return (
    <Flex gap="10px" alignItems={'center'} justifyContent={'center'}>
      <Text
        fontSize={'96px'}
        fontWeight={600}
        textAlign={'center'}
      >
        Что-то пошло не так
      </Text>
      <Button onClick={() => navigate('/game')}>Главная страница</Button>
    </Flex>
  )
}

export default ReactError
