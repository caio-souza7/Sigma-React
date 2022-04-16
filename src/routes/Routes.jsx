import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import Informacoes from "../Pages/Informacoes"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Informacoes} path="/informacoes" />
        </BrowserRouter>
    )
}

export default Routes