import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Informacoes from "../Pages/Informacoes"

const Rota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/informacoes" element={<Informacoes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rota