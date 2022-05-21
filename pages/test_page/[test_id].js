import React,{useState} from 'react'
import { useRouter } from 'next/router';
import TestShow from '../../components/TestShow/index'




export default function Test_id() {

   const [testQuestionAmount, setTestQuestionAmount] = useState([30,29,28,27,26,25]);
    const router = useRouter();
    console.log(router.query)
    const testId = router.query.test_id;
    const testQuestionNumber = testQuestionAmount[testId-1]

  return (
    <div>
        <TestShow testId = {testId} testQuestionNumber={testQuestionNumber} />
    </div>
  )
}

