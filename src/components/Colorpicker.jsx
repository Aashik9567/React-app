import React,{useState} from 'react'

export default function Colorpicker(){
 const [color,setColor]=useState("#FFFFFF")
 const handleColorChange=(e)=>{
     setColor(c=>e.target.value)
 }
  return (
    <>
      <div className='color-picker'>
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>selected color:{color}</p>
        </div>
        <label >select a color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  )
}
