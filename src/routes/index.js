import React from "react"
import { Routes, Route } from "react-router-dom";


export function routes() {
    return (
        <Routes>
            <Route path="/" element={<div>Hola</div>}/>
            <Route path="/documentation" element={<div>documetation</div>}/>
            <Route path="/*" element={<div>otra linea</div>}/>
        </Routes>
    )
}