/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import {InputField} from '../components/Input';
import { Eye, GoogleLogo } from '@phosphor-icons/react';

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

// import { Container } from './styles';

const signup = () => {
  const [nome, setNome] = useState<any>('');
  const [email, setEmail] = useState<any>('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState<any>('');

  const router = useRouter();

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // }

  const handleForgotPassword = () => {
    router.push('/SignIn')
  }

  return(
    <div className='w-full h-screen '>
      <Header onClick={() => alert("AAaa")}/>
      <div className="mt-2 flex flex-col items-center ">
        <h1 className='mb-[40px] font-bold text-2xl'>Delivery</h1>
        <p className='w-[50%] text-center font-normal text-[18px] text-slate-400'>Preencha os campos 
        para criar o seu cadastro.</p>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <Divider />
      </div>
     
      {/* Area De input  */}

      <div className="mt-[56px] px-[2rem]">
      <InputField 
       
       placeholder="Digite seu nome..." 
       onChange={setNome}
       value={nome}
       />


        <InputField 
       
        placeholder="Digite seu email..." 
        onChange={setEmail}
        value={email}
        />
        <div className=''>
         <InputField 
            onChange={setPassword}   
            value={password}
            password 
            placeholder='digite sua senha ' 
          />
         
        </div>
        <div className="flex items-center justify-center ">
          <Button 
          title='Cadastra-se' 
          href='/home'
          className='
          bg-slate-600
           text-white
            px-[2rem] 
            py-[1rem] 
            rounded-full 
            w-full 
            hover:bg-slate-700
            flex
            items-center
            justify-center            
            '
          />
        </div>

        <div className="flex justify-center items-center mt-[20px]">
          <p>Já tem cadastro ?  
            <span 
            className='text-slate-600 font-bold cursor-pointer' 
            onClick={handleForgotPassword}
            >Fazer Login</span></p>
        </div>
      </div>

        


    </div>
  );
}

export default signup;