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
import ContactPage from "./Pages/Navbar/ContactPage";
import AboutPage from "./Pages/Navbar/AboutPage";

function App() {
  return (
    <StartupAnimation>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </StartupAnimation>
  );
}

export default App;
