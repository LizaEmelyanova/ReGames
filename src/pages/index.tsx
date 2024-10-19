import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from '../shared/config/pages'
import { DefaultLayout } from '../shared/ui'

const MainPage = lazy(() => import('./main-page'))
const Games = lazy(() => import('./games'))

export default function Routing() {
    return (
        <DefaultLayout>
            <Routes>
                <Route
                    path={PageRoutes.MainPage}
                    element={
                        <MainPage />
                    }
                />
                <Route
                    path={PageRoutes.Games}
                    element={
                        <Games />
                    }
                />
            </Routes>
        </DefaultLayout>
    )
}