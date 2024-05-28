import React, { useEffect, useRef, useState } from 'react'
import './styles/stopwatch.css'
import Button from '@mui/material/Button';

const StopWatch = () => {
  const[isRunning,setIsRunning]=useState(false)
  const[elapsedTime,setElapsedTime]=useState(0)
  const intervalIdRef=useRef(null)
  const startTimeRef=useRef(0)
  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current=setInterval(() => {
        setElapsedTime(Date.now()-startTimeRef.current)
      }, 10);
    }
    return()=>{
      clearInterval(intervalIdRef.current)
    }

  },[isRunning])
  function start(){
    setIsRunning(true)
    startTimeRef.current=Date.now()-elapsedTime;
  }
  function stop(){
    setIsRunning(false)
  }
  function reset(){
    setElapsedTime(0)
    setIsRunning(false)
  }
  function formatTime(){
    let hrs=Math.floor(elapsedTime/(1000*60*60))
    let min=Math.floor(elapsedTime/(1000*60)%60)
    let sec=Math.floor(elapsedTime/(1000)%60)
    let millisec=Math.floor((elapsedTime%1000) /10)
    min=String(min).padStart(2,'0');
    sec=String(sec).padStart(2,'0');
    millisec=String(millisec).padStart(2,'0');
    return(
      `${min}:${sec}:${millisec}`
    )
  }
  return (
   <div className="stopwatch">
     <div className="display" style={{marginTop:'6rem'}}>
      {formatTime()}
     </div>
     <div className="controls">
      <Button sx={{margin:2,fontSize:'2.5rem', bgcolor:'orangered'}} variant="contained" onClick={start}>start</Button>
      <Button sx={{margin:2,fontSize:'2.5rem',bgcolor:'green'}} variant="contained" onClick={stop}>Stop</Button>
      <Button sx={{margin:2,fontSize:'2.5rem',bgcolor:'grey'}} variant="contained" onClick={reset}>Reset</Button>

     </div>
   </div>
  )
}

export default StopWatch
