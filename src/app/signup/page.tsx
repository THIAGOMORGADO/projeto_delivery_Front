/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from 'react';
import { InputField } from '../components/Input';
import { useRouter } from 'next/navigation';

// import { Container } from './styles';

const signup: React.FC = () => {
  
  const [email, setEmail] = useState<any>('');
  
  const router = useRouter();

  function handleSubmit() {
    router.push('/home')
  }

  return(
    <div className="w-screen h-screen flex">
      <div className="container flex flex-col items-center justify-center gap-10">
          <h1 className='text-[32px]'>Delivery_noow</h1>
          <p className='text-[18px] font-semibold'>Esqueceu sua senha?</p>
          <p className='w-[60%] text-center '>Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir  a sua senha.</p>
      
          <div className=" w-full px-20">
          <InputField 
              
              placeholder="Digite seu email..." 
              onChange={setEmail}
              value={email}
             
            />  
            <button 
            className='bg-slate-500 w-full p-3 rounded-md text-white font-bold'
            onClick={handleSubmit}
            >Enviar</button>
           </div>
      </div>
    </div>
  );
}

export default signup;