//REACT ROUTER DOM
import { Outlet } from "react-router-dom"

//COMPONENTS
import { Header } from "./Header/Header"
import { Main } from "./Main/Main"
import { Footer } from "./Footer/Footer"

export const Layout = () => {
    return (
        <div
            className="
                min-h-dvh flex flex-col w-full
            "
        >
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}