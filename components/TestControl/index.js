import React,{useState} from 'react'
import { FiCheckCircle , FiX, FiMinus} from "react-icons/fi";

export default function Index({testId, studentAnswer, testQuestionAnswer}) {
  const findOptions = (index) =>{
    let a;
    let b;
    b = studentAnswer.map((r)=>{
      if(r.id === index){
        b = r.answer;
        return b;
      }
      else{
        return b = "x"
      }
    })
    return b;

    
  }

  let selectedOption = "";

  return (
    <div className='bg-red-400 mx-auto text-center noselect'>
        <div className='bg-blue-400 rounded border-t-4 border-red-400'>
          <ul className='flex justify-center flex-col'>
          

          {testQuestionAnswer.map((e)=>
            e.test === parseInt(testId) &&
              e.answer.map((j, index)=>              
                <div key={index}>
                <li className="border-b m-2 p-2 flex justify-center items-center mx-auto">

                <div>
                  { 
                  findOptions(index+1).filter((t)=>t !== "x" && t) == j ?
                  <div className='bg-green-500 p-1 rounded-full border-2 border-gray-600'>
                    <FiCheckCircle size={30} className="text-white"/>
                  </div>
                  :
                  <div className='bg-red-600 p-1 rounded-full border-2 border-gray-600'>
                  <FiX size={30} className="text-white"/>
                  </div>
                  }
                </div>

                  <h1 className='text-white mr-2 font-medium text-xl p-1 '>{index+1}</h1>
                  <div className={`resultOptions ${j==="A" && "bg-green-500"} ${"A" == findOptions(index+1).filter((t)=>t !== "x" && t) && "bg-black text-white"}`}>A</div>
                  <div className={`resultOptions ${j==="B" && "bg-green-500"} ${"B" == findOptions(index+1).filter((t)=>t !== "x" && t) && "bg-black text-white"}`}>B</div>
                  <div className={`resultOptions ${j==="C" && "bg-green-500"} ${"C" == findOptions(index+1).filter((t)=>t !== "x" && t) && "bg-black text-white"}`}>C</div>
                  <div className={`resultOptions ${j==="D" && "bg-green-500"} ${"D" == findOptions(index+1).filter((t)=>t !== "x" && t) && "bg-black text-white"}`}>D</div>                
                  <div>
                    <button className='bg-white font-medium mx-2 px-4 py-2 rounded-xl border-2 hover:bg-gray-600 hover:text-white border-gray-600 hover:scale-110 ease-in-out duration-200'>Check
                    </button>
                  </div>
                </li>
                </div>
              )            
          )}
            
          </ul>
        </div>
    </div>
  )
}
/* 
<div>
                  { 
                  findOptions(index+1).filter((t)=>t !== "x" && t) == j ?
                  <div className='bg-green-500 p-1 rounded-full border-2 border-gray-600'>
                    <FiCheckCircle size={30} className="text-white"/>
                  </div>
                  :
                  <div className='bg-red-600 p-1 rounded-full border-2 border-gray-600'>
                  <FiX size={30} className="text-white"/>
                  </div>
                  }
                </div>

   */