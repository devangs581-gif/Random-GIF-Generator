// import axios from 'axios';
// import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

export default function Random() {
  const {gif,loader,fetchData}=useGif();

    function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-[40%] h-[450px] flex flex-col bg-green-400  rounded-lg border border-black text-center items-center'>
        <h1 className='text-3xl font-semibold underline'>A Random GIF</h1>
        {
          loader ? (
  <Spinner />
) : (
  <img 
    src={gif} 
    alt="Random GIF" 
    className="w-[50%] h-[350px] mt-3"
  />
)
        }
        <button className='w-[90%] bg-white mx-auto text-black text-2xl font-semibold 
        rounded-md opacity-80 mt-3 mb-5' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}
