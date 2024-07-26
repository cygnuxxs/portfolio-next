import React from 'react'
import Image from 'next/image'

const Skill : React.FC<{tech : string, logo : any }> = ({tech, logo}) => {
  return (
    <div className='w-[14rem] flex gap-2 rounded-sm items-center justify-center h-[4rem] bg-white'>
        <div className='w-10 h-10'>
        <Image height={80} width={80} className='object-cover' src={logo} alt={tech} />
        </div>
        <p className='font-medium tracking-wide'>{tech}</p>
    </div>
  )
}

export default Skill