/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'

import { Eye, EyeClosed } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';



export default function SignIn() {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter(); 

  type loginSchemaType = z.infer<typeof validationLogin>
  
  const validationLogin = z.object({
    email: z.string().min(1, {message: 'E-mail e obrigatorio'}).email('Formato de email invalido'),
    password: z.string().min(6, 'A senha precisa de 6 caracteres'),
  })
  const { register, handleSubmit, formState: {errors} } = useForm<loginSchemaType>({
    resolver: zodResolver(validationLogin)
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 function handleSignIn(data: loginSchemaType) { 
  router.push('/')
 }
  return (
    <>
      {/* Comeco do form area de Login  */}
      <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col items-center gap-5">
        <div className="mt-[40px] px-[2rem] flex flex-col  w-full ">

          <Input 
            placeholder="Digite seu email" 
            className="border-none mb-4"
            {...register("email")}
        
          />
          {errors.email && <span className="text-red-700">{errors.email.message}</span>}
          <div className="flex gap-2 bg-white rounded-md mb-6 mt-2">
          <Input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Digite sua senha"  
            className="border-none"
            {...register("password")}
          />
           
          <button type="button" onClick={togglePasswordVisibility} className="flex items-center justify-between mr-2">
            {showPassword ? <Eye size={32} className="text-slate-600"/> : <EyeClosed size={32} className="text-slate-600"/>}
          </button>
          </div>
          {errors.password && <span className="text-red-700">{errors.password.message}</span>}
        </div>
          <Button
            type="submit"
            className="bg-slate-600 text-white rounded-full w-[80%] hover:bg-slate-700 flex items-center justify-center"
          >
          Login
        </Button>
      </form>
      {/* Fim do Form Area de login */} 
    </>
  )
}
