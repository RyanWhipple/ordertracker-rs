import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <h1 style={{ textAlign: 'center' }}>Navbar</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', }}>
                <Link to="/vendors" >Vendors</Link>
                <Link to="/purchaseorders" >Purchase Orders</Link>
            </div>
        </nav >
    )
}
