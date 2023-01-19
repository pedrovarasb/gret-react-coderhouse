import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"

import HomePage from './HomePage'
import Cart from './Cart'
import Catalogue from './Catalogue'

function AppRouter() {
    return (
        <BrowserRouter>
            <Route path="/homepage" element={
                <HomePage/ >
            } />
            
            <Route path="/cart" element={
                <Cart/ >
            } />
            
            <Route path="/catalogue" element={
                <Catalogue/ >
            } />
        </BrowserRouter>
    )
}

export default AppRouter