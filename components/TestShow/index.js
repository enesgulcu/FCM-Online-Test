import React,{useState} from 'react'
import Link from 'next/link';
import TestSovle from '../TestSolve/index'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";


const pageincrease = (testId, testPageAmount, whatWeDo) =>{
  const testidvalue = parseInt(testId);
  if(whatWeDo === -1 && testidvalue > 1){
    return testidvalue = testidvalue-1
  } 
  else if(whatWeDo === +1 && testidvalue >= 1 &&testidvalue < testPageAmount){   
    return testidvalue = testidvalue+1
  }
  else{
      return testidvalue;      
  }  
}

export default function Index({testId}) {

  const [testPageAmount, setTestPageAmount] = useState(3) //toplam test sayısı
  const [startCheck, setstartCheck] = useState(true);
  
  return (
    <div>
      {startCheck ?
      <div className='flex justify-center items-center flex-col mb-4 noselect'>
      <h2 className='font-medium text-lg p-2 border bg-red-400 rounded-xl mt-2 text-white'>Test {testId}</h2>
        <div className='bg-[#d5edff] rounded-xl border-4 border-red-400 inline-block mx-auto mt-2 relative'>
          <ul className='flex justify-between p-4 gap-x-2'>

          <Link href={`/test_page/${pageincrease(testId,testPageAmount,-1)}`} ><li className='testShowButton'><a className='testShowButtonText'><BsFillArrowLeftCircleFill size={30}/></a></li></Link>

          <Link href="/"><li className='testShowButton'><a className='testShowButtonText'>All Tests</a></li></Link>

            <li onClick={()=>setstartCheck(false)} className='bg-green-500 testShowButton'><a className='testShowButtonText'>START</a></li>

          <Link href={`/test_page/${pageincrease(testId,testPageAmount,+1)}`}><li className=' testShowButton'><a className='testShowButtonText'><BsFillArrowRightCircleFill size={30}/></a></li></Link>  

          </ul>
          <img className='max-h-screen' src={`/quiz/test-${testId}/test-${testId}-1.jpg`} alt={"Test:" + testId}/>        
        </div>                
      </div>
      :
      <div className='flex justify-center items-center flex-col mb-4'>      
        <TestSovle testId={testId} startCheck={startCheck} setstartCheck={setstartCheck} />                 
      </div>
      
    }
    </div>
  )
}
