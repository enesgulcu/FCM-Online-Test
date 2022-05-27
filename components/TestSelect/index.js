import React,{useState, useEffect} from 'react'
import Link from 'next/link'



export default function Index() {

  const [imageLink, setImageLink] = useState(["question circle-0","question circle-1","question circle-2","question circle-3","question circle-4","question circle-5","question circle-6"]) // Inside unid
  
  return (
    <div className='m-4 noselect mx-auto container p-2 md:p-4 bg-[#d5edff] rounded-xl shadow-lg border-4 border-red-400'>
      <ul className='gap-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7'> 
        {            
          imageLink.map((icon, index)=>{
            index = index+1;
            return <Link key={index} href={`/test_page/${index}`} >
              <li >                
                  <div className='rounded-full hover:cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <img className='shadow-lg rounded-full' src={`/icons/question-icons/${icon}.png`} alt=""/>
                  </div>                
              </li>
            </Link> 
                                          
              
          })
        }
      </ul>     
    </div>
  )
}
