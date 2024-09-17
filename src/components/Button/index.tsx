import React from 'react';

interface Props {
    value: string;
    bg_color: string;
    style: string;
}

const Button = ({value, bg_color,style}:Props) => {
  return (
    <button className={`${style} border-[1px] border-black py-2 px-4  font-semibold  text-sm lg:text-base
        ${bg_color==="bg-black"?"bg-black text-white  shadow-[5px_5px_0px_0px_#6b7280]":
          "text-black  bg-white  shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white hover:shadow-[5px_5px_0px_0px_#6b7280]"}`}
    >
        {value}
    </button>
  )
}

export default Button;
