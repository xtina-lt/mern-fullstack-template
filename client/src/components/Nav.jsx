import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(true)
  const links = [
    {href : "/objs", text : "Objs"},
    {href : "/obj/new", text : "New"}
  ]

  const updatewindowWidth = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    // UPDATE WINDOW SIZE 
    window.addEventListener('resize', updatewindowWidth);
  }, [])

  return (
    <nav id="page-nav-bar"
      className={(isHidden) ? "hide-nav" : ""}>

        {/* logo  */}
      <img className="logo"
        src={logo}
        alt="logo"
        onClick={() => setIsHidden(!isHidden)} />



                                   {/* hide when link is clicked */}
      <nav id="site-nav" >
        {/* map through each link */}
        {links.map((e,i)=>(

            <Link 
              onClick={()=>setIsHidden(!isHidden)} 
              to={e.href} 
              key={i}>

              {e.text}
            </Link>

          ))}


        <Link to="/"
          // close
          onClick={()=>evaluateHidden()} 
          // hide for full nav bar - uses logo
          className={(windowWidth > 800) ?
            "hide" :
            ""}>
          Home
        </Link>
      </nav>

    </nav>
  )
}

export default Nav