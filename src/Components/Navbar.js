import React from 'react'

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
            <label htmlFor="navbar-toggle" className="navbar-toggle-label">
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </label>
            <ul>
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <ul>
                <li><a href="">Sign In</a></li>
                <li className='tryfree'><a href="">Try Free</a></li>
            </ul>
        </div>
    )
}

export default Navbar