import React,{useState, useEffect} from 'react'
import Link from 'next/link';

import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function Index({testId,startCheck,setstartCheck,testQuestionNumber}) {

  const [selectAnswer, setSelectAnswer] = useState("");
  const [studentAnswer, setStudentAnswer] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [checkAnswer, setCheckAnswer] = useState("");

  
  useEffect(() => {
    if(selectAnswer!= ""){
      const a = studentAnswer.filter((answer)=>{
        return answer.id === questionCounter
      })
      const b = studentAnswer.filter((answer)=>{
        return answer.id !== questionCounter
      })

      if(a.length !== 0){
       setStudentAnswer([...b,{
        id:questionCounter,
        answer:selectAnswer,
      }]);   
      }
      else{
        setStudentAnswer([...studentAnswer,{
          id:questionCounter,
          answer:selectAnswer,
        }]); 
       }
    }
  }, [selectAnswer]);


  const checkOption = () =>{
    
  }
  
 
  useEffect(() => {
    const a = studentAnswer.filter((answer)=>{
      return answer.id === questionCounter
    })
    if(a.length !== 0){
      setSelectAnswer(a[0].answer);
    }
    else{
      setSelectAnswer("");
    }
    
  }, [questionCounter])

  

  return (
    <>
    <div className='flex justify-center item-center mx-auto flex-col'>
      <div className='flex gap-5 justify-between'>
          <h2 className='font-medium text-lg p-2 border bg-red-400 rounded-xl mt-2 cursor-pointer text-white'>Test {testId}</h2>
          <h2 onClick={()=>setstartCheck(true)} className='font-medium text-lg p-2 border bg-red-400 rounded-xl mt-2 cursor-pointer text-white'><a>Go Back</a></h2>
      </div>
          <div className='bg-[#d5edff] min-w-[350px] rounded-xl border-4 border-red-400 inline-block mx-auto mt-2 relative'>
            <ul className='flex justify-around p-4 gap-x-2'>
            <li onClick={()=>setQuestionCounter(questionCounter === 1 ? questionCounter : questionCounter-1)} className='testShowButton'><a className='testShowButtonText'><BsFillArrowLeftCircleFill size={30}/></a></li>
    
              <li onClick={()=>setQuestionCounter(questionCounter === testQuestionNumber+1 ? questionCounter : questionCounter+1)} className='testShowButton'><a className='testShowButtonText'><BsFillArrowRightCircleFill size={30}/></a></li>          
            </ul>
            {testQuestionNumber>= questionCounter ?
            <div className=' bg-[#d5edff] flex justify-center flex-col items-center container'>             
              <img className='w-[70%] h-auto' src={`/quiz/test-${testId}/test-image/${testId}-${questionCounter}.jpg`} alt=''/>             
              <div className=" w-full flex justify-center items-center">
                <button onClick={()=>setSelectAnswer("A")} className={selectAnswer === "A" ? "solvebuttonafterclick" : "solvebuttonbefore"}>A</button>
                <button onClick={()=>setSelectAnswer("B")} className={selectAnswer === "B" ? "solvebuttonafterclick" : "solvebuttonbefore"}>B</button>
                <button onClick={()=>setSelectAnswer("C")} className={selectAnswer === "C" ? "solvebuttonafterclick" : "solvebuttonbefore"}>C</button>  
                <button onClick={()=>setSelectAnswer("D")} className={selectAnswer === "D" ? "solvebuttonafterclick" : "solvebuttonbefore"}>D</button> 
              </div>              
            </div>
            : <div className='p-4 bg-blue-400 rounded m-4 text-white font-medium'>Testi bitir</div>
            }  
          </div>  
      </div>
  </>

  )
}
