
import { useEffect, useState } from 'react';
import WelcomeFade from './components/WelcomeFade';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Research from './components/Research';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  const [isChecked, setIsChecked] = useState(true)

  useEffect(() => {
    setInterval(() => {
      if(isChecked === true){
        setIsChecked(false)
      }
    }, 5000)
  }, [])
  if(isChecked) return <WelcomeFade isChecked={isChecked}/>
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/portfolio/" element={<Navigate to="/portfolio/home"/>} />
          <Route path="/portfolio/home" element={<Profile/>} />
          <Route path="/portfolio/aboutme" element={<AboutMe />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/research" element={<Research />} />
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;
