import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWebflow } from "react-icons/fa6";
function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
        <div className='basis-1/2'>
            <h1 className='text-[11.5rem] leading-none tracking-tight font-medium'>Kalmy</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='capitalize mb-10 text-zinc-500'>socials</h4>
                {["instagram","twitter (x?)","LinkedIn"].map((social,index)=><a className='block mt-2 capitalize text-zinc-600'>{social}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='capitalize mb-10 text-zinc-500'>Sitemap</h4>
                {["Home","Work","Careers","contact"].map((social,index)=><a className='block mt-2 capitalize text-zinc-300'>{social}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-right'>Kalmy is pioneering digital agency driven by design and empowered by technology</p>
                <div className='w-full rounded-full px-4 py-2 border-[1px] border-zinc-500 mt-10 flex justify-between items-center gap-3'>
                    <div className='flex gap-2'><FaWebflow className=' text-2xl'/>
                    <h1 className='font-regular'>Webflow Partner</h1></div>
                    <IoIosArrowRoundForward className=' text-3xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer