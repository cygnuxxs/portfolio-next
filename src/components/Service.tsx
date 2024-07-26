import React from 'react'
import { ServiceProps } from '@/lib/utils'
import Image from 'next/image'

const Service : React.FC<ServiceProps> = ({title, description, icon}) => {
  return (
    <div className='w-1/3 px-6 space-y-4 flex flex-col py-8 text-center bg-white'>
      <div className='w-full flex justify-center'>
      <Image height={50} width={50} alt={title} src={icon} />
      </div>
      <p className='text-2xl font-semibold'>{title}</p>
      <p className='text-md font-normal tracking-wide leading-relaxed text-neutral-500'>{description}</p>
    </div>
  )
}

export default Service