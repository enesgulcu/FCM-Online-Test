import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import TestControl from '../TestControl/index'

import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function Index({testId,startCheck,setstartCheck}) {

  const [selectAnswer, setSelectAnswer] = useState("");
  const [studentAnswer, setStudentAnswer] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(30);
  const [checkAnswer, setCheckAnswer] = useState("");

   const[answerButton, setAnswerButton] = useState(false);
  
  const [testQuestionAmount, setTestQuestionAmount] = useState([30,29,28,27,26,25]);
  const testQuestionNumber = testQuestionAmount[testId-1]

  const [testQuestionAnswer, setTestQuestionAnswer] = useState([
    //30 soru
    {test:1,answer:["A","C","C","D","A","B","C","B","D","A","C","B","A","C","C","D","A","B","C","B","D","A","C","B","A","C","C","D","A","B"]},
    //29 soru
    {test:2,answer:["A","C","C","D","A","B","C","B","D","A","C","B","A","C","C","D","A","B","C","B","D","A","C","B","A","C","C","D","A"]},
    //28 soru
    {test:3,answer:["A","C","C","D","A","B","C","B","D","A","C","B","A","C","C","D","A","B","C","B","D","A","C","B","A","C","C","D"]},
  ])

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
        // after click wait some time and go next question
        setTimeout(()=>setQuestionCounter(questionCounter+1), 300); 
       }
       
    }
  }, [selectAnswer]);
  
 
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
      <div onClick={()=>setAnswerButton(false)} className='flex gap-5 justify-between'>
          <h2 className='hover:scale-110 ease-in-out duration-300 noselect font-medium text-lg p-2 border bg-red-400 rounded-xl mt-2 cursor-pointer text-white'>Test {testId}</h2>
          <h2 onClick={()=>setstartCheck(true)} className='hover:scale-110 ease-in-out duration-300 noselect font-medium text-lg p-2 border bg-indigo-600 rounded-xl mt-2 cursor-pointer text-white'><a>Go Back</a></h2>
      </div>
          <div className='bg-[#d5edff] min-w-[350px] md:min-w-[500px] lg:min-w-[700px] rounded-xl border-4 border-red-400 inline-block mx-auto mt-2 relative'>
            <ul onClick={()=>setAnswerButton(false)} className='flex justify-around p-4 gap-x-2'>
            {questionCounter > 1  &&
            <li onClick={()=>setQuestionCounter(questionCounter === 1 ? questionCounter : questionCounter-1)} className='testShowButton'><a className='testShowButtonText noselect'><BsFillArrowLeftCircleFill size={35}/></a></li>
            }
            {testQuestionNumber >= questionCounter &&
              <li onClick={()=>setQuestionCounter(questionCounter === testQuestionNumber+1 ? questionCounter : questionCounter+1)} className='testShowButton noselect'><a className='testShowButtonText'><BsFillArrowRightCircleFill size={35}/></a></li> 
            }         
            </ul>
            {testQuestionNumber>= questionCounter ?
            <div className=' bg-[#d5edff] flex justify-center flex-col items-center container'>

              <img className='noselect w-[70%] h-auto rounded-xl border-2 border-blue-200' src={`/quiz/test-${testId}/test-image/${testId}-${questionCounter}.jpg`} alt=''/>             
              <div className="w-full flex justify-center items-center noselect">
                <button onClick={()=>setSelectAnswer("A")} className={selectAnswer === "A" ? "solvebuttonafterclick" : "solvebuttonbefore"}>A</button>
                <button onClick={()=>setSelectAnswer("B")} className={selectAnswer === "B" ? "solvebuttonafterclick" : "solvebuttonbefore"}>B</button>
                <button onClick={()=>setSelectAnswer("C")} className={selectAnswer === "C" ? "solvebuttonafterclick" : "solvebuttonbefore"}>C</button>  
                <button onClick={()=>setSelectAnswer("D")} className={selectAnswer === "D" ? "solvebuttonafterclick" : "solvebuttonbefore"}>D</button> 
              </div>              
            </div>
              :<div> 
              <div onClick={()=>setAnswerButton(!answerButton)} className='cursor-pointer hover:scale-110 ease-in-out duration-300 p-4 w-60 text-center mx-auto bg-blue-400 rounded m-4 text-white font-medium'>
              <button>Check The Answers</button>
            </div> 
            {answerButton && <div className='flex justify-center items-center gap-x-4 mb-2'>
                <div className='flex justify-center items-center gap-x-2'>
                  <div className='p-2 bg-black border border-black rounded-full w-2'></div>
                  <h5>Student Answer</h5>
                </div>
                <div className='flex justify-center items-center gap-x-2'>
                  <div className='p-2 bg-green-500 border border-black rounded-full w-2'></div>
                  <h5>Correct Answer</h5>
                </div>
              </div>
              }
            </div>
            
            }
            {answerButton &&
              <TestControl testId={testId} studentAnswer={studentAnswer} testQuestionAnswer={testQuestionAnswer} />
            }  
          </div>  
      </div>
  </>

  )
}
