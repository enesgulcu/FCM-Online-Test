import React,{useState} from 'react'
import { useRouter } from 'next/router';
import TestShow from '../../components/TestShow/index'




export default function Test_id() {

   
    const router = useRouter();
    const testId = router.query.test_id;
    

  return (
    <div>
        <TestShow testId = {testId} />
    </div>
  )
}

