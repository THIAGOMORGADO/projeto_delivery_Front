import { ArrowCircleLeft } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

type Headerprops = {
  title?: string,
}

export function Header({ title } : Headerprops){
  return(
    <header className='flex items-center  h-[5rem] px-[2rem]'>
      <Link href='/'>
        <ArrowCircleLeft size={32} color='#64748b'/>
        <h1>{title}</h1>
      </Link>
    </header>
  )
}
