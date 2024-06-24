import { Eye, EyeClosed } from '@phosphor-icons/react';
import React, { useState } from 'react';

type Props = {
  color?: string;
  className?: {};
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  password?: boolean;

}


export const InputField = ({color, placeholder, value, onChange, password, className} : Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false)


  function toggleShowPassword () {
    setShowPassword(!showPassword)
  }

  return(
    <div
      className='flex w-full'
    >
        <input
          type={password ? (showPassword ? 'text' : 'password') : 'text' }
          className="bg-[#f9f9f9] w-[100%] p-2 rounded-md pl-5 mb-[32px]" 
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)} 
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

{
          password && 
          <div  className="ml-3" onClick={toggleShowPassword}>
            {showPassword && <Eye size={32} /> }
            {!showPassword && <EyeClosed size={32} /> }
          </div>
        }
     
    </div>
  );
}