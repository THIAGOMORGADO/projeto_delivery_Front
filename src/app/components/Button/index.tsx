import React from 'react';

type ButtonProps = {
  title: string,
  onClick: () => void,
  className: string
}

const Button = ({title, onClick, className} : ButtonProps) => {
  return(
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;