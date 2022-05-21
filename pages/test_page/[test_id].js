import React from 'react'
import { useRouter } from 'next/router';
import TestShow from '../../components/TestShow/index'




export default function Test_id() {
    const router = useRouter();
    console.log(router.query)
    const testId = router.query.test_id;

  return (
    <div>
        <TestShow testId = {testId}/>
    </div>
  )
}

