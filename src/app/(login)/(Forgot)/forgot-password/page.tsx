/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
  type ForgotEmailSchema = z.infer<typeof forgotPasswordSchema>
  const [email, setEmail] = useState<any>('');

  const forgotPasswordSchema = z.object({
    email: z.string().email('Formato de email inválido').min(1, 'E-mail é obrigatório'),
  });

  const {register, handleSubmit, formState: {errors}} = useForm<ForgotEmailSchema>({
    resolver: zodResolver(forgotPasswordSchema)
  })
  
  const router = useRouter();

  function handleForgotPassword(data: ForgotEmailSchema) {
    if(data.email) {
      console.log(data.email);
      router.push('/validation');
    }
    
  }
  return(
    <div className="w-screen h-screen flex">
      <div className="container flex flex-col items-center justify-center gap-10">
          <h1 className='text-[32px]'>Delivery_noow</h1>

          <p className='text-[18px] font-semibold'>Esqueceu sua senha?</p>
          <p className='w-[60%] text-center '>Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir  a sua senha.</p>
      
          <form onSubmit={handleSubmit(handleForgotPassword)} className=" w-full px-20 flex  flex-col gap-3">
            <Input placeholder="Digite seu email..." {...register("email")}/>  
            {errors.email && <span className="text-red-700">{errors.email.message}</span>}
            <Button 
              type='submit' 
              className='bg-slate-500 w-full p-3 rounded-md text-white font-bold'  
              
            >
           
              Enviar
            </Button>
           </form>

      </div>
    </div>
  );
}
