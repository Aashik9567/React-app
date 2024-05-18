import { useState } from "react"
import React from 'react'
import './styles/todo.css'

const Todolist = () => {
    const [tasks,setTasks]=useState([])
    const [newTasks,setNewTasks]=useState("")
    const addTask=()=>{
        if(newTasks.trim()!==""){
            setTasks(t=>[...t,newTasks])
            setNewTasks("")
        }
    }
    const handleInputChange=(event)=>{
        setNewTasks(event.target.value)
    }
   const deleteTask = (index)=>{
   const updatedTask=tasks.filter((elem,i)=> {
    if(i != index){
        return elem
    }
   })
    setTasks(updatedTask)
    console.log(updatedTask)
 }
   const moveUp = (index)=>{
    if(index>0){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
       setTasks(updatedTask)
    } }
   const moveDown = (index)=>{
    if(index<tasks.length-1){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
       setTasks(updatedTask)
    } }
  return (
    <>
       <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div className="inputarea">
            <input type="text" className="ip" placeholder="enter a task" value={newTasks} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>
        </div>
        <div><h3>task list</h3></div>
       <ul className="ul-to-do">
        {tasks.map((tasks,index)=><li key={index} >
        <span className="taskitem">{tasks}</span>
           <button className="del-btn" onClick={()=>{
             deleteTask(index)
           }}><i className="fa-regular fa-trash-can"></i></button>
          <button className="moveup-btn" onClick={()=>{moveUp(index)}}><i className="fa-regular fa-circle-up"></i></button>
          <button className="moveup-btn" onClick={()=>{moveDown(index)}}><i className="fa-regular fa-circle-down"></i></button>
        </li>)}
       </ul>
       </div>
    </>
  )
}

export default Todolist
