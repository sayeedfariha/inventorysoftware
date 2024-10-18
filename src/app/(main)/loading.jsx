import React from 'react'
import { ThreeDot } from 'react-loading-indicators';

function loading() {
  return (
    <div className='w-full h-full'>
      <ThreeDot color="#3197cc" size="large" text="" textColor="" />
    </div>
  )
}

export default loading
