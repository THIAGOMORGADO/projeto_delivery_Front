
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import React from 'react'

export default function validation() {
  return (
    <div className='flex items-center justify-center w-full h-screen flex-col'>
      <div className="text-center w-46 p-10 gap-10 flex flex-col">
        <h1>Insira o codigo de validaçao</h1>
        <p>Enviamos um codigo para sue email para validar sua indetidade insira no campos abaixo</p>
      </div>

      <div className="text-white">

      <form action="">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button title='Validar' className='bg-slate-500 text-white w-[100%] mt-10'>Validar</Button>
      </form>
     
      </div>
     
      
    </div>
  )
}
