import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  title: string,
  href: string,
  className: string
}

const Button = ({title, className, href} : ButtonProps) => {
  return(
    <Link className={className} href={href}>{title}</Link>
  );
}

export default Button;