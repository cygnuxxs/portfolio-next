import React from 'react'
import Image from 'next/image'
import { LinkPreview } from './ui/link-preview'

const Contact : React.FC<{name : string, logo : any, handle : string }> = ({name, logo, handle}) => {
  return (
    <LinkPreview url={handle}>
    <div className='w-[14rem] flex gap-2 rounded-sm items-center justify-center h-[4rem] bg-white'>
        <div className='w-10 h-10'>
        <Image height={80} width={80} className='object-cover' src={logo} alt={name} />
        </div>
        <p className='font-medium tracking-wide'>{name}</p>
    </div>
    </LinkPreview>
  )
}

export default Contact