'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import {InputField} from '../components/Input';
import { Eye } from '@phosphor-icons/react';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<any>('');
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState<any>('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return(
    <div className='w-full h-screen '>
      <Header onClick={() => alert("AAaa")}/>
      <div className="mt-5 flex flex-col items-center ">
        <h1 className='mb-[40px] font-bold text-2xl'>Delivery</h1>
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
      </div>


    </div>
  );
}

export default SignIn;