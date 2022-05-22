import React from 'react'

export default function index({testId, studentAnswer, testQuestionAnswer}) {
  return (
    <div className='bg-red-400 mx-auto text-center'>
        <div className='bg-blue-400 rounded border-t-4 border-red-400'>
          <ul className='flex justify-center flex-col'>
          {testQuestionAnswer.map((e)=>
            e.test === parseInt(testId) &&
              e.answer.map((j, index)=>{
                return <li key={index} className="border-b m-2 p-2 flex justify-center items-center mx-auto">
                <h1 className='text-white mr-2 font-medium text-xl p-1 '>{index+1} -</h1>
                  <button className={`resultOptions ${j==="A" && "bg-green-500"}`}>A</button>
                  <button className={`resultOptions ${j==="B" && "bg-green-500"}`}>B</button>
                  <button className={`resultOptions ${j==="C" && "bg-green-500"}`}>C</button>
                  <button className={`resultOptions ${j==="D" && "bg-green-500"}`}>D</button>
                </li>
              })            
          )}
            
          </ul>
        </div>
    </div>
  )
}