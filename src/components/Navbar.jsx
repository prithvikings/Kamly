import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-4  flex items-center justify-between font-regular border-b-[1px] border-zinc-700">
      <div className='nleft flex items-center'>
      <img src="https://cdn.prod.website-files.com/64fecceda7b376ccd0b96a90/64fecceda7b376ccd0b96b2d_favicon.png" alt="" />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture","","News"].map((elem,index) => (
          elem.length===0 ?<span key={index} className='w-[2px] h-7 bg-zinc-700'></span>:
          <a href="#" key={elem} className="text-sm flex items-center gap-1">
            {index===1 ? <span style={{boxShadow: "0 0 0.4 5em #00ff19"}} className='inline-block w-1 h-1 rounded-full bg-green-500'></span> : null} 
            {elem}
          </a>
        ))}
      </div>
      </div>
      <Button content="Get started" />
    </div> 
  )
}

export default Navbar