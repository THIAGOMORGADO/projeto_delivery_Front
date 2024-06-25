/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from 'react';
import { InputField } from '../components/Input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import emailIMg from './icon.svg'

// import { Container } from './styles';

const forgotSucess: React.FC = () => {
  
  const [email, setEmail] = useState<any>('');
  
  const router = useRouter();

  function handleSubmit() {
    router.push('/SignIn');
  }

  return(
    <div className="w-screen h-screen flex">
      <div className="container flex flex-col items-center justify-center gap-10">

          <Image src={emailIMg} alt='' color='#64748b'/>
          <p className='text-[29px] font-semibold text-[#64748b]'>Verifique seu e-mail ?</p>
          <p className='w-[70%] text-center text-[18px] font-normal text-[#1b1b1b]'>Enviamos as instruções para recuperação de senha para o seu e-mail.</p>
      
          <div className=" w-full px-20">
            <button 
            className='bg-slate-500 w-full p-3 rounded-md text-white font-bold'
            onClick={handleSubmit}
            >Enviar</button>
           </div>
      </div>
    </div>
  );
}

export default forgotSucess;