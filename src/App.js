
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
    }, 5000)
  }, [])
  if(isChecked) return <WelcomeFade isChecked={isChecked}/>
  return (
    <div className="App">
        <Navbar/><Footer/> 
    </div>
  );
}

export default App;
