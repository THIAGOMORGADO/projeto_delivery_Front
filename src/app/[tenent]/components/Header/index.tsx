import { ArrowCircleLeft } from '@phosphor-icons/react';
import React from 'react';

type Headerprops = {
  title?: string,
  onClick: () => void
}


const Header = ({ title, onClick } : Headerprops) => {
  return(
    <header className='flex items-center  h-[5rem] px-[2rem]'>
       <ArrowCircleLeft size={32} color='#64748b' onClick={onClick}/>
      <h1>{title}</h1>
     
    </header>
  )
}

export default Header;