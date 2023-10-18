import React from 'react'
import Barchart from './chart/Barchart'
import Paichart from './chart/Paichart'

function Chart() {
  return (
    <div className='chart'>
        <Barchart />
        <Paichart />
    </div>
  )
}

export default Chart