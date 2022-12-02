import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countMinutes, setCountMinutes] = useState('00');
  const [countSecond, setCountSecond] = useState('00');
  const [isActive, setIsActive] = useState('');

  
  useEffect(() => {
    
    let contador = setInterval(() => {

      if(isActive){
        if(countMinutes > 0){
          setCountMinutes("0" + countMinutes - 1);
      } else if(countMinutes === 0){
        clearInterval(contador);
        setIsActive(false);
        setCountMinutes("00")
      }
    }
  }, 1000);
      
      return () => clearInterval(contador);

  }, [isActive, countMinutes])
  
  
  function toggleIsActive() {
    setIsActive(!isActive);

  }
  
  
  return (
    <div className="App">
      <body>

<div className="wrapper">
  <div className="ring">
    <svg width="518" height="518" viewBox="0 0 518 518">
      <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254" />
    </svg>
  </div>

  <div className="timer">
    <div className="time">
      <div className="minutes">
        <input type="text" value={countMinutes} onChange={event => setCountMinutes(event.target.value)} />
      </div>
      <div className="colon">:</div>
      <div className="seconds">
        <input type="text" value={countSecond} onChange={event => setCountSecond(event.target.value)} />
      </div>
    </div>
    <button 
        className="start"
        onClick={toggleIsActive} 
        id="start_stop">
        {isActive ? "Pause" : "Start"}
    </button>
    
    
    
    <button className="settings">
      <img src="images/gear.svg" alt="Settings" />
    </button>
  </div>
</div>

</body>
    </div>
  )
}

export default App
