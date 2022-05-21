import React from 'react'
import Link from 'next/link';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function Index({testId,startCheck,setstartCheck}) {
  return (
    <>
    <div className='flex justify-center item-center mx-auto flex-col'>
      <div className='flex gap-5'>
          <h2 className='font-medium text-lg p-2 border bg-red-400 rounded-xl mt-2 text-white'>Test {testId}</h2>
      </div>
          <div className='bg-[#d5edff] rounded-xl border-4 border-red-400 inline-block mx-auto mt-2 relative'>
            <ul className='flex justify-between p-4 gap-x-2'>
            <li className='testShowButton'><a className='testShowButtonText'><BsFillArrowLeftCircleFill size={30}/></a></li>
              <div onClick={()=>setstartCheck(true)} className=' bg-violet-600 testShowButton'><a className='testShowButtonText'>Go Back</a></div>
              <li className='testShowButton'><a className='testShowButtonText'><BsFillArrowRightCircleFill size={30}/></a></li>          
            </ul>
            <div className=' bg-[#d5edff] flex justify-center flex-col items-center container'>              
                <img className='w-[70%] h-auto'  src="/quiz/test-1/test-image/1-1-1.jpg" alt=''/>              
              <div className=" w-full flex justify-center items-center">
                <button className='border-2 p-3 bg-white rounded-full  w-[50px] m-4 font-medium text-black hover:border-gray-600 hover:scale-110 ease-in-out duration-200'>A</button>
                <button className='border-2 p-3 bg-white rounded-full w-[50px] m-4 font-medium text-black hover:border-gray-600 hover:scale-110 ease-in-out duration-200'>B</button>
                <button className='border-2 p-3 bg-white rounded-full w-[50px] m-4 font-medium text-black hover:border-gray-600 hover:scale-110 ease-in-out duration-200'>C</button>  
                <button className='border-2 p-3 bg-white rounded-full w-[50px] m-4 font-medium text-black hover:border-gray-600 hover:scale-110 ease-in-out duration-200'>D</button> 
              </div>       
            </div>  
          </div>
      </div>
  </>

  )
}
