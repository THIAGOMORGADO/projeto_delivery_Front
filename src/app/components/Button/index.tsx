import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  title: string,
  
  className: string
}

const Button = ({title, className} : ButtonProps) => {
  return(
    <Link className={className} title={title} href={''}  />
  );
}

export default Button;