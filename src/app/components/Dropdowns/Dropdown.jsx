'use client';
import { useState } from 'react';
import { RiArrowDropUpLine } from "react-icons/ri";


export const Dropdown = ({ title, children, bg_color, text_color, icon }) =>
{

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () =>
  {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item w-full">
      <div className={`accordion-header flex flex-row items-center justify-between text-black p-2 cursor-pointer ${bg_color} `} onClick={toggleAccordion}>
        <div className='flex items-center gap-2'>
        <span className='text-slate-800'>{icon}</span>
        {title}
        </div>
        <RiArrowDropUpLine className={`transition-all ease-in-out text-4xl  rounded-full ring-slate-500 ${isOpen ? 'rotate-180' : 'rotate-90'}`} />
      </div>
      <div
        className={`transition-all ease-in-out duration-700 bg-slate-50 ${isOpen ? 'max-h-96' : 'max-h-0'
          } overflow-hidden`}
      >
        <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out p-2 ${text_color}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
