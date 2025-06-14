import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//This is how the useEffect hook runs on mounting and unmounting and also during the updation .
function App() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    //on mount
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    //on unmount
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h2>Timer : {timer}</h2>
    </>
  );
}

export default App;
