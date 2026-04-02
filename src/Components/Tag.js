// import axios from 'axios';
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

export default function Tag() {

  const [input,setInput]=useState('Salman Khan');

  const {gif,loader,fetchData}=useGif(input);
 
  function clickHandler(){
    fetchData(input);
  }

  function changeHandler(event){
      const value=event.target.value;
      setInput(value);
  }

  return (
    <div className='w-[40%] h-[450px] flex flex-col bg-blue-400  rounded-lg border border-black text-center items-center'>
        <h1 className='text-3xl font-semibold underline uppercase'>Random {input} GIF</h1>
        {
          loader ? (
  <Spinner />
) : (
  <img
    src={gif}
    alt="Generated GIF"
    className="w-[50%] h-[300px] mt-3"
  />
)
        }
        
        <input className='text-center w-[90%] py-1 text-lg rounded-lg font-semibold mt-2' 
        onChange={changeHandler} value={input}></input>
        
        <button className='w-[90%] bg-white mx-auto text-black text-2xl font-semibold 
        rounded-md opacity-80 mt-3 mb-5' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}
