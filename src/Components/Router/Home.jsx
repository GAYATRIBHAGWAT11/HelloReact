import React from 'react'
import { NavLink } from "react-router-dom";
import '/Users/admin/HelloReact/helloreact/src/Components/Router/Home.css'

export default function Home() {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}
