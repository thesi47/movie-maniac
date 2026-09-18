import React from 'react'
import Navbar from './header/navbar/Navbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router'

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root