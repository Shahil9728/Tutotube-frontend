import React from 'react'

const Navbar = () => {
    return (
        <div id="navbar">
            <a href="" style={{textDecoration:"none"}}>
                <div id="logo">
                    <img src="logo.png" alt="logo" />
                    <h1>Tutotube</h1>
                </div>
            </a>
            <ul>
                <li className="active">
                    <a to="#">Home</a>
                </li>
                <li><a to="#">Pricing</a></li>
                <li><a to="#">Contact</a></li>
                <li><a to="#">About</a></li>
            </ul>
            <ul>
                <li><a href="">Sign In</a></li>
                <li className='tryfree'><a href="">Try Free</a></li>
            </ul>
        </div>
    )
}

export default Navbar