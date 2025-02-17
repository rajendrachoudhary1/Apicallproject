import React from 'react'
import './Postcard.css'
const Postcard = (props) => {
  return (
    
    <div className='postcards'>
        <div className='postcard'>
        <h1>{props.Title}</h1>
        <p>{props.body}</p>
        </div> 
    </div>
  )
}

export default Postcard
