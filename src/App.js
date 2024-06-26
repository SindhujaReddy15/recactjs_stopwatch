import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect ( () => {
    let interval;
    if(running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime+10);
      }, 10);
    }
    else if (!running) {
      clearInterval(interval);
    }
    return() => clearInterval(interval);
  }, [running]
  );
  return (
  
   <div className='w-550 h-1000 bg-violet-100 max-w-md flex flex-col items-center justify-left py-10' >
    <h1 className='text-2xl font-semibold '>Stop watch</h1>
    <div className='text-xl font-semibold py-4'>
      <span>{("0" + Math.floor((time/6000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time/10) % 100)).slice(-2)}</span>
    </div>
    <div className='w-1/3 flex flex-row justify-evenly'>
      {
        running ? (
        <button className="border bg-violet-200 rounded-lg py-1 px-3" onClick={ () => { setRunning(false) }}>Stop</button>
        ) : (
          <button className="border bg-violet-200 rounded-lg py-1 px-3" onClick={ () => { setRunning(true) }}>Start</button>
        )
      }
      <button className="border bg-violet-200 rounded-lg py-1 px-3"onClick={ () => { setTime(0) }}>Reset</button>
    </div>
    </div>
   
    
  );
}

export default App;
