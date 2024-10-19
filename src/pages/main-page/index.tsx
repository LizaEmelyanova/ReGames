import { BlueTriangle } from "shared/iconpack"
import { Flex, Heading } from "shared/ui"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <Flex
            cursor={'pointer'}
            alignItems={'center'}
            justifyContent={'center'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate('/games')}
        >
            <BlueTriangle
                style={{
                    position: 'absolute',
                    width: isHovered ? '361px' : '287px', 
                    height: isHovered ? '416px' : '332px',
                    zIndex: -1,
                    transform: isHovered ? 'rotate(0deg)' : 'rotate(-15deg)'
                }}
            />
            <Heading fontSize={isHovered ? '155px' : '170px'}>ReGames</Heading>
        </Flex>
    )
}

export default MainPage