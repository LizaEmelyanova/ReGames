import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from '../shared/config/pages'
import { DefaultLayout } from '../shared/ui'

const MainPage = lazy(() => import('./main-page'))
const Games = lazy(() => import('./games'))
const Registration = lazy(() => import ('./registration'))
const Login = lazy(() => import ('./login'))

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
                <Route
                    path={PageRoutes.Registration}
                    element={
                        <Registration />
                    }
                />
                <Route
                    path={PageRoutes.Login}
                    element={
                        <Login />
                    }
                />
            </Routes>
        </DefaultLayout>
    )
}