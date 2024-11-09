import {
    ContainerPage,
    Grid, 
    GameCard,
    LoadingCard
} from "shared/ui"
import { gamesList } from "entities/games"

const Games = () => {
    return (
        <ContainerPage avatar>
            <Grid
                m='30px 250px 0 250px'
                templateColumns={
                    'minmax(270px, 270px) minmax(270px, 270px) minmax(270px, 270px)'
                }
                columnGap='60px'
                rowGap='45px'
                pb='7px'
            >
                {gamesList.map((game) => (
                    <GameCard key={game.id} {...game} />
                ))}
                <LoadingCard />
            </Grid>
        </ContainerPage>
    )
}

export default Games