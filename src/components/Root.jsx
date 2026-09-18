import React, { useState } from 'react'
import Navbar from './header/navbar/Navbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router'

function Root() {
    const [search, setSearch] = useState('');

    return (
        <>
            <Navbar search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root