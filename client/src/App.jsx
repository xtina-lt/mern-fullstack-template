import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Test from './views/Test'
import Catchall from './views/Catchall'
import Header from './components/Nav'
import bkg from './assets/keyboard-logo-bkg.mp4'
import ShowAll from './views/ShowAll'
import ShowOne from './views/ShowOne'
import Create from './views/Create'

import '../src/App.css'
function App() {

  return (
    <>
      {/* BACKGROUND VIDEO - don't remove me */}
      <BrowserRouter>
        <video autoPlay muted loop id="bk-vid"src={bkg}/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obj/new" element={<Create/>} />
          <Route path="/objs" element={<ShowAll/>} />
          <Route path="/obj/:id" element={<ShowOne/>} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Catchall />} />
        </Routes>
        {/* <footer>footer</footer> */}
      </BrowserRouter>
    </>
  )
}

export default App



// Playing with animations
// import { useEffect, useState } from 'react'
// import bkg from './assets/aurora.mp4'
// // import './App.css'
// import '../src/assets/css/test.css'
// // DEPEDENCY IMPORTS
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// // COMPONENT IMPORTS
// import Home from './views/Home'
// import Catchall from './views/Catchall'
// import Nav from './components/Nav'




// const App = () => {
//   const [word, setWord] = useState(['H','e','l','l','o'])

//   return(
//     <div>

//       {
//         word.map((e, i)=>(
//           <span style={{"animation": `fadeIn ${i*3}s`}}>
//             {e}
//           </span>
//         ))
//       } 
//     </div>
//   )
// }

// export default App
