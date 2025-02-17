import React from 'react'
import {getposts} from '../../api/api';
import { useState } from 'react';
import './Mainpage.css'
import Postcard from '../card/Postcard';
 

const Mainpage = () => {
    
    const [output, setoutput] = useState('');


    const handler =() => {
        getposts().then((posts)=>setoutput(posts));
       
    }
  return (
    <div>
        <button onClick={handler} className='btn'>click me!!</button>
        <div>
        <div className='app'>
            {output? output.map((e) =><Postcard Title={e.title} body={e.body} />): null}  
         </div>
        </div>
        
    </div>
  )
}

export default Mainpage
