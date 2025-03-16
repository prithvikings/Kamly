import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
      {imagesurls.map(url=><img src={url} alt="logo" className="w-[10vw] flex-shrink-0" />)}
      {imagesurls.map(url=><img src={url} alt="logo" className="w-[10vw] flex-shrink-0" />)}

    </div>
  )
}

export default Marquee