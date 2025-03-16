import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] '>
        <div onMouseEnter={() => {mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
          <h1 className='font-medium text-6xl capitalize'>{val.title}</h1>
          <div className='dets w-1/3'>
            <p className='mb-10'>{val.description}</p>
            <div className='w-1/3 flex items-center gap-4'>
              {val.live && <Button />}
              {val.case && <Button content='Case Study' />}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product