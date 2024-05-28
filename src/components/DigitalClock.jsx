import React, { useEffect, useState } from 'react'
import "./styles/clock.css"

const DigitalClock = () => {
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
      const interval=setInterval(() => {
        setTime(new Date())
      }, 1000);
      return()=>{
        clearInterval(interval)
      }
  },[])
  function formattime(){
    let hrs=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    const meridian= hrs > 12 ? 'PM': 'AM';
    hrs=hrs%12 || 12;
    return `${padZero(hrs)}:${padZero(min)}:${padZero(sec)} ${meridian}`
  }
  function padZero(num){
     return (num  < 10? "0"+num:num);
  }
  return (
    <>
    <div className="clock-container" style={{marginTop:'6rem'}}>
        <div className="clock">
            <span><h1>{formattime()}</h1></span>
        </div>
      
    </div>
    </>
  )
}

export default DigitalClock
