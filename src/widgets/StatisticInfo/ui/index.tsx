import {
    ActiveStatistic,
    FavoriteGame,
    Grid,
    GridItem,
    RankingPlace
} from "shared/ui"


function StatisticInfo() {
    return (
        <Grid
            gridTemplateColumns={'2fr 3fr'}
            gridTemplateRows={'2fr 3fr'}
            gridColumnGap='30px'
            templateAreas={`'rankingPlace favoriteGame'
                            'activeStatistic favoriteGame'`}
        >
            <GridItem area={'rankingPlace'}>
                <RankingPlace />
            </GridItem>
            <GridItem area={'activeStatistic'}>
                <ActiveStatistic />
            </GridItem>
            <GridItem area={'favoriteGame'}>
                <FavoriteGame />
            </GridItem>
        </Grid>
    )
}

export { StatisticInfo }