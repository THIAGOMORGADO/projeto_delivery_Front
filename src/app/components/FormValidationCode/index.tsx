'use client'
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function FormValidationCode() {
  type ValidationCodeType = z.infer<typeof validationSchema>;

  const [code, setCode] = useState<string>('');
  const router = useRouter();

  const validationSchema = z.object({
    name: z.string().min(6, 'Código inválido'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<ValidationCodeType>({
    resolver: zodResolver(validationSchema),
  });

  const handleCode = (data: ValidationCodeType) => {
    if (data.name) {
      setCode(data.name);
      router.push('/forgot-sucess');
    } else {
    }
  };

  return (
    <div className="text-white w-80">
      <form onSubmit={handleSubmit(handleCode)}>
        <div className="h-12">
          <Input
            placeholder="Informe o código"
            className="text-center text-black mb-2"
            maxLength={6}
            {...register('name')}
          />
          {errors.name && <span className="text-red-700">{errors.name.message}</span>}
        </div>

        <Button type="submit" className="bg-slate-500 text-white w-[100%] mt-10">
          Validar
        </Button>
      </form>
    </div>
  );
}
