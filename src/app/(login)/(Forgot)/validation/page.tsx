import React from 'react'

import { FormValidationCode } from '@/app/components/FormValidationCode'

export default function validation() {
  return (
    <div className='flex items-center justify-center w-full h-screen flex-col'>
      <div className="text-center w-46 p-10 gap-10 flex flex-col">
        <h1>Insira o codigo de validaçao</h1>
        <p>Enviamos um codigo para sue email para validar sua indetidade insira no campos abaixo</p>
      </div>

      <FormValidationCode />

    </div>
  )
}
