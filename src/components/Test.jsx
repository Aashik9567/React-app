import React from 'react'

const Test = ({nameOfButton}) => {
const handle=(e)=>{
         e.target.textContent="clicked"
      }
  return (
    <div>
        <button onClick={(e)=>{handle(e)}}>hello</button>
        <h1>{nameOfButton}</h1>
    </div>
  )
}
export default Test;