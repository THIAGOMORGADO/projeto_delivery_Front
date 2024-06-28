
"use client";
import React from "react";

import Link from "next/link";

import { FormNewAccounts } from "@/app/components/FormNewAccounts";

export default function signup() {
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-5">
      <div className=" flex flex-col items-center " >
        <h1 className="mb-[40px] font-bold text-2xl ">Delivery</h1>
        <p className="w-[80%] text-center font-normal text-[18px] text-slate-400">
          Preencha os campos para criar o seu cadastro.
        </p>
      </div>
      <FormNewAccounts />
      <div className="flex justify-center items-center mt-[6px]">
        <p>
          Já tem cadastro ?
          <Link
            href="/signin"
            className="text-slate-600 font-bold cursor-pointer"
          > Fazer Login</Link>
        </p>
      </div>
    </div>
  );
}
