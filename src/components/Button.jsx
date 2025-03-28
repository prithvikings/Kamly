import React from 'react';
import { IoIosReturnRight } from 'react-icons/io';

const Button = (prop) => { 
  const {content}=prop;
  const buttontext=content?content:"Get started";
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{buttontext}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;