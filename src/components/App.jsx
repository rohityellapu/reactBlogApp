import React from 'react'
import Nav from './Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Authors from './Authors';

import Profile from './Profile';
import Blog from './Blog';
import Footer from './Foot'

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />

                <Routes>
                    <Route path='/' element={ <Authors /> } />

                    <Route path='/profile/:id' element={ <Profile /> } />
                    <Route path='/blog/:id' element={ <Blog /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;