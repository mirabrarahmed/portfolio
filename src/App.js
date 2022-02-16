import './App.css';
import { useEffect, useState } from 'react';
import WelcomeFade from './components/WelcomeFade';
import HomeScreen from './components/HomeScreen';

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
        {isChecked === false? <HomeScreen/> : <WelcomeFade isChecked={isChecked}/> }
      </div>
  );
}

export default App;
