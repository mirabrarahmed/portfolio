
import { useEffect, useState } from 'react';
import WelcomeFade from './components/WelcomeFade';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

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
