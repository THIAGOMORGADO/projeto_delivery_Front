

'use client'
import Link from "next/link";
import { Header } from "../Header";
import { useState } from "react";
import { Bell, List, MagnifyingGlass, UserCircle } from "@phosphor-icons/react";

import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function Home() {
  const [loggend] = useState(false)
 

  
  return (
    <>
      <div className="w-max-[600px] h-screen">
       <header className="bg-slate-400 w-full font-bold flex justify-between h-[8%] items-center px-5 text-white">
        <h1>Restaurante do fulando</h1>
        {!loggend ?  
            <div className="flex gap-7">
              <div className="flex items-center space-x-2">
                <Bell size={24} color="#fff"/>
             
              </div>
              <div className="flex items-center space-x-2">
                {/* Alterar a Image para quando o usuario 
                estiver logado subir a foto dele tanto do banco quando login social 
              */}
                <img src="https://via.placeholder.com/32" alt="Profile Picture" className="rounded-full h-8 w-8"/>
               
              </div>
            </div>
           
            : 
          <List size={32} color="#fff"/>
        } 
       </header>

        {/* <div className="bg-slate-700 h-[30%] flex flex-col items-center justify-center ">
          <div className="w-80 mt-[40%] flex items-center justify-center gap-6 ">
            <Input placeholder="Digite um prato ou bebida..." className="rounded-3xl"/>
            <Button className="">
              <MagnifyingGlass size={24} />
            </Button>
          </div>
        </div>
 */}

      </div>
    </>
  );
}