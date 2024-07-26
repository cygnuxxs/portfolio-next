import React from 'react'
import { ProjectProps } from '@/lib/utils'
import Image from 'next/image'
import { LinkPreview } from '@/components/ui/link-preview'
import { toTitleCase } from '@/lib/utils'

const Project : React.FC<ProjectProps> = ({title, description, image, link, tech}) => {
  return (
    <div className='w-full flex px-8 py-2'>
        <Image className='object-cover' src={image} height={400} width={400} alt='title'/>
        <div className='px-8 flex flex-col py-4'>
            <p className='text-3xl font-medium'>{title}</p>
            <p className='font-medium text-neutral-500 text-lg py-1'>{tech}</p>
            <p className='w-3/4 font-normal leading-loose text-lg my-8 text-neutral-500 tracking-wide'>{toTitleCase(description)}</p>
            <LinkPreview className='w-[6rem] border-b-2 border-black py-1' url={link}>All View</LinkPreview>
        </div>
    </div>
  )
}

export default Project