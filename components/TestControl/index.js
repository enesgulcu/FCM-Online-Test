import React,{useState, useEffect} from 'react'
import { FiCheckCircle , FiX, FiMinus} from "react-icons/fi";

export default function Index({testId, studentAnswer, testQuestionAnswer, testQuestionNumber}) {


  studentAnswer.sort(function(a, b) { 
    // student answer array again ordered according to "question id"
    return - ( b.id - a.id  ||  a.answer.localeCompare(b.answer));
  });

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [blankAnswer, setBlankAnswer] = useState(0);


useEffect(() => {

  bul();
  
}, [])

const bul = () =>{
  setBlankAnswer(studentAnswer.filter((r)=>r.answer == 'X')) 

  testQuestionAnswer.map((e)=>
    e.test === parseInt(testId) &&
    setCorrectAnswer(e.answer.filter((j, index)=>studentAnswer[index].answer == j)))
}


  
  return (
    <div className=' mx-auto text-center noselect'>
    <div className='flex justify-center gap-x-2 p-4 font-medium text-white items-center '>

      <div className='bg-green-500 p-1 flex justify-center items-center gap-x-2 px-2 rounded-full border-2 border-gray-600'>
        <FiCheckCircle size={20} className='text-white' />
        <h5 className='text-lg flex justify-center items-center'>correct: {correctAnswer.length}</h5>
      </div>
      <div className='bg-orange-400 p-1 flex justify-center items-center gap-x-2 px-2 rounded-full border-2 border-gray-600'>
        <FiMinus size={20} className='text-white' />
        <h5 className='text-lg flex justify-center items-center'>blank: {blankAnswer.length}</h5>
      </div>
      <div className='bg-red-600 p-1 flex justify-center items-center gap-x-2 px-2 rounded-full border-2 border-gray-600'>
        <FiX size={20} className='text-white' />
        <h5 className='text-lg flex justify-center items-center'>wrong: {testQuestionNumber-(blankAnswer.length + correctAnswer.length)}</h5>
      </div>
      
    </div>
    <div>
    </div>
      <div className='bg-blue-400 rounded border-t-4 border-red-400'>
        <ul className='flex justify-center flex-col'>
        {testQuestionAnswer.map((e)=>
          e.test === parseInt(testId) &&
            e.answer.map((j, index)=>              
              <div key={index}>
              <li className="border-b m-2 p-2 flex justify-center items-center mx-auto">
                <div>
                      {studentAnswer[index].answer == 'X' ? (
                        
                        <div className='bg-orange-400 p-1 rounded-full border-2 border-gray-600'>
                          <FiMinus size={15} className='text-white' />

                        </div>
                      ) : studentAnswer[index].answer == j ? (
                        <div className='bg-green-500 p-1 rounded-full border-2 border-gray-600'>
                          <FiCheckCircle size={15} className='text-white' />

                        </div>
                      ) : (
                        <div className='bg-red-600 p-1 rounded-full border-2 border-gray-600'>
                          <FiX size={15} className='text-white' />

                        </div>
                      )}
                    </div>
                  

                  <h1 className='text-white mr-2 font-medium text-xl p-1 '>{index+1}</h1>
                  <div className={`resultOptions ${j==="A" && "bg-green-500"} 
                  ${studentAnswer[index].answer == "A" && "bg-black text-white"}`}>A</div>
                  <div className={`resultOptions ${j==="B" && "bg-green-500"} 
                  ${studentAnswer[index].answer == "B" && "bg-black text-white"}`}>B</div>
                  <div className={`resultOptions ${j==="C" && "bg-green-500"} 
                  ${studentAnswer[index].answer == "C" && "bg-black text-white"}`}>C</div>
                  <div className={`resultOptions ${j==="D" && "bg-green-500"} 
                  ${studentAnswer[index].answer == "D" && "bg-black text-white"}`}>D</div>                
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