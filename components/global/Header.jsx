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
                        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Projects</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
                    </ul>
                </div>
                <div className="nav__resume">
                    <button className="resume__btn">Download CV</button>
                </div>
                <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <BiGridAlt />
                </div>
            </nav>
        </header>
    )
}

export default Header