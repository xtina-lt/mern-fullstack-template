import { useState } from 'react'
import icon from '../assets/icon.png'


const Nav = () => {
    const [isActive, setIsActive] = useState(true)
    const goHome = () => {
        console.log("go home")
    }

    const toggleMenu = () => {
        console.log("made it")
        setIsActive(!isActive)
    }

    return (
        <header id="nav-bar">
            <img id="logo-icon"
                className="icon"
                src={icon}
                onClick={() =>
                    (window.innerWidth > 850) ?
                        goHome() :
                        toggleMenu()} />
            {/* //         goes from   DISPLAY: NONE  to  DISPLAY: BLOCK */}
            <nav id="nav-links" 
                className={(isActive) ? "" : "hide"}>
                <a href='#home'>Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
            <button id="user-icon"
                    className={ (isActive) ? "" : "hide"}>
                🦄
            </button>
        </header>

    )
}

export default Nav