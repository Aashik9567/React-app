import React from 'react'
import Colorpicker from './Colorpicker'
import Todolist from './Todolist'


const ColorPage = () => {
  return (
    <div className="frame">
    <Colorpicker/>
    <Todolist/>
    {/* <ProductList/> */}
   </div>
  )
}

export default ColorPage
