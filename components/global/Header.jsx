import React, { useState } from 'react'
import { BiGridAlt } from 'react-icons/bi'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className={`${menuOpen ? 'header active' : 'header'}`}>
            <nav className="nav container">
                <div className="nav__logo">
                    <h3>Saj</h3>
                </div>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link" onClick={() => setMenuOpen(false)}>About Me</a></li>
                        <li className="nav__item"><a href="#projects" className="nav__link" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
                <div className="nav__resume">
                    <button className="btn">Download CV</button>
                </div>
                <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <BiGridAlt />
                </div>
            </nav>
        </header>
    )
}

export default Header