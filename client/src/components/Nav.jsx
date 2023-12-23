import { useState } from 'react'
import icon from '../assets/logo.png'


const Nav = () => {
    const [isActive, setIsActive] = useState(true)
    const links = [
        { "title": "Home", "url": '#home' },
        { "title": "About", "url": '#about' },
        { "title": "Services", "url": '#services' },
        { "title": "Contact", "url": '#contact' }
    ]

    const goHome = () => {
        console.log("go home")
    }

    const toggleMenu = () => {
        console.log("made it")
        setIsActive(!isActive)
    }

    const staggerStyle = e => {
        let result = { animation: "glow 1s ease-in-out infinite alternate" }
        if (window.innerWidth > 850)
            result['animation'] += `, bounce-top ${(e + 1) * 1.5}s both`
        return result
    }

    return (
        <header id="nav-bar">
            <img id="logo-icon"
                className="icon"
                src={icon}
                onClick={() =>
                    (window.innerWidth > 850) ?
                        goHome() :
                        toggleMenu()} 
            />
            {/* //         goes from   DISPLAY: NONE  to  DISPLAY: BLOCK */}
            <nav id="nav-links"
                className={(isActive) ? "" : "hide"}>
                {
                    links.map((e, idx) => (
                        <a key={idx}
                            href={e.url}
                            style={staggerStyle(idx)}>
                            {e.title}
                        </a>
                    ))
                }
            </nav>
            <button id="user-icon"
                className={(isActive) ? "" : "hide"}>
                🦄
            </button>
        </header>

    )
}

export default Nav