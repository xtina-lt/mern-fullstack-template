function App() {

  return (
    <>
      {/* BACKGROUND VIDEO - don't remove me */}
      <video autoPlay muted loop src={bkg}/>
      {/* <header> Title Title </header> */}
      <Nav/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Catchall/>}/>
          </Routes>
        </BrowserRouter>
        {/* <footer>footer</footer> */}
      </main>
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
