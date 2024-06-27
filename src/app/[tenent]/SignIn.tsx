'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import Divider from './components/Divider';
import {InputField} from './components/Input';
import { Eye, GoogleLogo } from '@phosphor-icons/react';

import Link from 'next/link'
import { useRouter } from 'next/navigation';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<any>('');
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState<any>('');

  const router = useRouter();

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // }

  const handleForgotPassword = () => {
    router.push('/forgot-password')
  }

  return(
    <div className='w-full h-screen '>
      <Header onClick={() => alert("AAaa")}/>
      <div className="mt-2 flex flex-col items-center ">
        <h1 className='mb-[40px] font-bold text-2xl text-[#64748b]'>Delivery</h1>
        <p className='w-[50%] text-center font-normal text-[18px] text-slate-400'>Use suas credenciais para realizar o login.</p>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <Divider />
      </div>
     
      {/* Area De input  */}

      <div className="mt-[56px] px-[2rem]">
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
          <Link 
          title='Entra' 
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
          >Login</Link>
        </div>

        <div className="flex justify-center items-center mt-[20px]">
          <p>Esqueceu sua senha ? <span className='text-slate-600 font-bold cursor-pointer' onClick={handleForgotPassword}>Clique aqui</span></p>
        </div>

        <div className="mt-[26px] flex flex-col items-center justify-center gap-3 ">
          <p>Entra com sua Conta ? </p>

          <div className="cursor-pointer" onClick={() => {alert("Aqui entra num negocio ")}}>
            <GoogleLogo size={32} weight="bold" />
          </div>
        </div>
        <div className="flex mt-4 justify-center items-center">
         <Link 
         href='/signup'
         className='
         bg-white 
         text-black 
         flex
         items-center
         justify-center
         border-2 
         border-slate-700 
         mb-10 px-[2rem] 
         py-[1rem] 
         rounded-full 
         w-[50%] hover:bg-slate-700 hover:text-white'>
          Cadastra-se
         </Link>
        </div>
      </div>

      


    </div>
  );
}

export default SignIn;