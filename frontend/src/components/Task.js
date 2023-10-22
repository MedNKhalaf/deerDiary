import React from 'react'
import  './task.css'
import {BsTrash} from "react-icons/bs"
import {BiEditAlt} from "react-icons/bi"


 const Task = () => {
  return (
    <div className='note-container'>
        
        <div class="title-container">
        <div className='note-actions'>
            <BsTrash />
            <BiEditAlt />
        </div>
            <h3 className='title'>Title</h3>
            <span className='tag'>Tag</span>
        </div>

        <div className='content-container'>
            <p className='content'>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
        </div>

        

    </div>
  )
}

export default Task;