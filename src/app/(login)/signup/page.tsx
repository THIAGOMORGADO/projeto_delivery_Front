/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import Divider from '../../components/Divider';
import {InputField} from '../../components/Input';

import Link from 'next/link'
import { Button } from '@/components/ui/button';

export default function signup(){

  const [nome, setNome] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  return(
    <div className='w-full h-screen '>
      <Header/>
      <div className="mt-2 flex flex-col items-center ">
        <h1 className='mb-[40px] font-bold text-2xl'>Delivery</h1>
        <p className='w-[50%] text-center font-normal text-[18px] text-slate-400'>
          Preencha os campos para criar o seu cadastro.
        </p>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <Divider />
      </div>  
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
        <InputField 
          placeholder='digite sua senha ' 
          onChange={setPassword}
          value={password}
          password
        />        
        <div className="flex items-center justify-center">
          <Button title='Entrar' onClick={() => {}} className='bg-slate-600 text-white rounded-full w-full hover:bg-slate-700 flex items-center justify-center px-[2rem] py-[1rem]'>
            Cadastra-se
          </Button>
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <p> Já tem cadastro ? 
            <Link  href='/forgot-password' className='text-slate-600 font-bold cursor-pointer'>
              Fazer Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}