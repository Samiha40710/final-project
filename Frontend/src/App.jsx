// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Components/Home/Home'
// import LoginPage from './Pages/Auth/LoginPage'
// import RegisterPage from './Pages/Auth/RegisterPage'
// import Navbar from './Components/Navbar/Navbar'

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/register' element={<RegisterPage />} />
//       </Routes>
//     </>
//   )
// }

// export default App

import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import Navbar from './Components/Navbar/Navbar'
import StartupAnimation from "./Components/StartupAnimationFastBite";

function App() {
  return (
    <StartupAnimation>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </StartupAnimation>
  );
}

export default App;
