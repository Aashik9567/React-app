import React, { useEffect, useState } from 'react'
import "./styles/todo.css"
import Card from './Card'

const ProductList = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState()
    const fetchData = async()=>{
        
            try {
                const dataUse = await fetch("https://fakestoreapi.com/products")
            const useData = await dataUse.json()
            setData(useData)
            } catch (error) {
                 alert(error)
            }
       
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)

  return (
    <div>
     {
        data?data.map((items)=>{
            return(
                <Card name={items.title} image={items.image}/>
            )
        }):null
     }
    </div>
  )
}

export default ProductList
