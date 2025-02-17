import React from 'react'
import Postcard from '../card/Postcard';
import { useState,useEffect } from 'react';
import {getposts} from '../../api/api';


const Secondpage = () => {
  
    const [data,setdata] = useState()

useEffect(()=>{
  getposts().then((posts)=>setdata(posts));
 },[]);

  return (
    <div>
     
       <div className='app'>
        {data? data.map((e)=> <Postcard Title={e.title} body={e.body} />):null}
      </div>


    </div>
  )
}

export default Secondpage
