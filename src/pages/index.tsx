import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from '../shared/config/pages'
import { DefaultLayout } from '../shared/ui'

const MainPage = lazy(() => import('./main-page'))
const Games = lazy(() => import('./games'))
const Registration = lazy(() => import('./registration'))
const Login = lazy(() => import('./login'))
const Saper = lazy(() => import('./saper'))
const Snake = lazy(() => import('./snake'))
const PasswordRecovery = lazy(() => import('./password-recovery'))

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
                <Route
                    path={PageRoutes.PasswordRecovery}
                    element={
                        <PasswordRecovery />
                    }
                />
                <Route
                    path={PageRoutes.Saper}
                    element={
                        <Saper />
                    }
                />
                <Route
                    path={PageRoutes.Snake}
                    element={
                        <Snake />
                    }
                />
            </Routes>
        </DefaultLayout>
    )
}