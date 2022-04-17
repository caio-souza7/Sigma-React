import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Informacoes from "../Pages/Informacoes"

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={Home} exact />
            <Route path="/informacoes" component={Informacoes} />
        </Router>
    )
}

export default Routes