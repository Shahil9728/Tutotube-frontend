import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="navbar">
            <a href="" style={{ textDecoration: "none" }}>
                <div id="logo">
                    <img src="logo.png" alt="logo" />
                    <h1>Tutotube</h1>
                </div>
            </a>
            <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
            <label htmlFor="navbar-toggle" className="navbar-toggle-icons">
                <div className="navbar-toggle-icon"></div>
                <div className="navbar-toggle-icon"></div>
                <div className="navbar-toggle-icon"></div>
            </label>
            <label htmlFor="navbar-toggle-label" className="navbar-toggle-label">
                <li className="active">
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="contact">Contact</NavLink></li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="about">About</NavLink>
                </li>
            </label>
            <ul>
                <li className="active">
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="contact">Contact</NavLink></li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="about">About</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="signin">Signin</NavLink>
                </li>
                <li className='tryfree'>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="signup">Try Free</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar