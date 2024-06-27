/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { Header } from "../../components/Header";
import Divider from "../../components/Divider";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Eye, EyeClosed, GoogleLogo } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Container } from './styles';

export default function signin() {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [showPassword, setShowPassword] = useState(false);

  type loginSchemaType = z.infer<typeof validationLogin>

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  const validationLogin = z.object({
    mail: z.string().email(),
    password: z.string().min(6),
  })

 function handleSignIn(data: loginSchemaType) {
  console.log(data);
 }
 
 const { register, handleSubmit } = useForm<loginSchemaType>({
  resolver: zodResolver(validationLogin)
});

  return (
    <div className="w-max-[600px] h-screen ">
      <Header />
      <div className="mt-2 flex flex-col items-center ">
        <h1 className="mb-[40px] font-bold text-2xl text-[#64748b]">
          Delivery
        </h1>
        <p className="w-[70%] text-center font-normal text-[18px] text-slate-400">
          Use suas credenciais para realizar o login.
        </p>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <Divider />
      </div>

      
      {/* Comeco do form area de Login  */}
      <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col items-center">
        <div className="mt-[40px] px-[2rem] flex flex-col gap-10 w-full ">

          <Input 
            placeholder="Digite seu email" 
            className="border-none"
            {...register("mail")}
          />

          <div className="flex gap-2 bg-white rounded-md mb-10 ">
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
      
        </div>
          <Button
            type="submit"
            title="Entra"
            onClick={() => {}}
            className="bg-slate-600 text-white rounded-full w-[80%] hover:bg-slate-700 flex items-center justify-center"
          >
          Login
        </Button>
      </form>
      {/* Fim do Form Area de login */}


      <div className="flex items-center justify-center "></div>

      <div className="flex justify-center items-center mt-[20px]">
        <p>
          Esqueceu sua senha ?{" "}
          <span
            className="text-slate-600 font-bold cursor-pointer"
            onClick={() => {}}
          >
            Clique aqui
          </span>
        </p>
      </div>

      <div className="mt-[26px] flex flex-col items-center justify-center gap-3 ">
        <p>Entra com sua Conta ? </p>

        <div
          className="cursor-pointer"
          onClick={() => {
            alert("Aqui entra num negocio ");
          }}
        >
          <GoogleLogo size={32} weight="bold" />
        </div>
      </div>

      <div className="flex mt-4 justify-center items-center">
        <Link
          href="/signup"
          className="
         bg-white 
         text-black 
         flex
         items-center
         justify-center
         border-2 
         border-slate-700 
         
         p-2
         rounded-full 
         w-[50%] hover:bg-slate-700 hover:text-white"
        >
          Cadastra-se
        </Link>
      </div>
    </div>
  );
}
