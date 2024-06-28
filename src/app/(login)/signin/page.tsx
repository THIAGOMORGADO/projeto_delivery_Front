/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Header } from "../../components/Header";
import Divider from "../../components/Divider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"

import SignIn from "@/app/components/FormLogin";
import { GoogleLogo } from "@phosphor-icons/react";

export default function signin() {

  function handelSignIn() {
    signIn('github', {callbackUrl: '/components/home'})
  }

  const router = useRouter();
  return (
    
    <div className="w-max-[600px] h-screen ">
      <Header />
      <div className="flex flex-col items-center ">
        <h1 className="mb-[40px] font-bold text-2xl text-[#64748b]">
          Delivery
        </h1>
        <p className="w-[70%] text-center font-normal text-[18px] text-slate-400">
          Use suas credenciais para realizar o login.
        </p>
      </div>
      <div className="flex items-center justify-center mt-[20px]">
        <Divider />
      </div>
      
      <SignIn />
    
      <div className="flex justify-center items-center mt-[20px]">
        <p>
          Esqueceu sua senha ?{" "}
          <Link
            className="text-slate-600 font-bold cursor-pointer"
            href="/forgot-password"
          >
            Clique aqui
          </Link>
        </p>
      </div>

      <div className="mt-[26px] flex flex-col items-center justify-center gap-3 ">
        <p>Entra com sua Conta ? </p>

        <div className="cursor-pointer">
          <GoogleLogo size={32} weight="bold" onClick={handelSignIn} />
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
