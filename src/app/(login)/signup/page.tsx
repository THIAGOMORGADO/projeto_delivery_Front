/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";

import Divider from "../../components/Divider";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "@/app/components/Input";

export default function signup() {
  const [nome, setNome] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  type createSchemaType = z.infer<typeof validationCreate>;

  const validationCreate = z.object({
    nome: z.string().min(1, { message: "Nome e obrigatorio" }),
    email: z
      .string()
      .min(1, { message: "E-mail e obrigatorio" })
      .email("Formato de email invalido"),
    password: z.string().min(6, "A senha precisa de 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha precisa de 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createSchemaType>({
    resolver: zodResolver(validationCreate),
  });

  function handleNewAccount(data: createSchemaType) {
    console.log(data);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center gap-5">
      <div className=" flex flex-col items-center " >
        <h1 className="mb-[40px] font-bold text-2xl ">Delivery</h1>
        <p className="w-[80%] text-center font-normal text-[18px] text-slate-400">
          Preencha os campos para criar o seu cadastro.
        </p>
      </div>

  

      <div className="px-[2rem] flex flex-col">
        <form
          onSubmit={handleSubmit(handleNewAccount)}
          className="flex flex-col"
        >
          <div className="flex flex-col gap-4 ">
          {errors.nome && <p className="text-red-700 text-[12px] bg-green-500">{errors.nome.message}</p>}
            <Input placeholder="Informe seu nome" {...register("nome")}/>
          
          
          {errors.email && <p className="text-red-700 text-[12px] ">{errors.email.message}</p>}
          <Input placeholder="Informe seu e-mail" {...register("email")} />

          {errors.password && <p className="text-red-700 text-[12px]">{errors.password.message}</p>}
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            className="border-none"
            {...register("password")}
          />
         {errors.confirmPassword && <p className="text-red-700 text-[12px]">{errors.confirmPassword.message}</p>}
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirme sua senha"
            className="border-none"
            {...register("confirmPassword")}
          />
          </div>
           
          
          <div className="flex items-center justify-center ">
            <Button
              type="submit"
              className="bg-slate-600 text-white rounded-full w-full hover:bg-slate-700 flex items-center justify-center mt-10"
            >
              Fazer cadastro
            </Button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center mt-[6px]">
        <p>
          {" "}
          Já tem cadastro ?
          <Link
            href="/forgot-password"
            className="text-slate-600 font-bold cursor-pointer"
          >
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
}
