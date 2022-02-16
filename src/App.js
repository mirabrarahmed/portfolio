
import { useEffect, useState } from 'react';
import WelcomeFade from './components/WelcomeFade';
import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Profile from './components/Profile';
import {Outlet} from 'react-router-dom';

function App() {
  const [isChecked, setIsChecked] = useState(true)

  useEffect(() => {
    setInterval(() => {
      if(isChecked === true){
        setIsChecked(false)
      }
    }, 4000)
  }, [])
  return (
    <div className="App">
        {isChecked === false?<><Navbar/><Footer/> </>: <WelcomeFade isChecked={isChecked}/> }
    </div>
  );
}

export default App;
