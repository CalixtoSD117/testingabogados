import { RiArrowDropUpLine, RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri"
import { CheckBoxCustom } from "../CheckboxCustom/CheckBoxCustom"
import { PointersFamily } from "../Pointers/Pointers"
import { useState } from "react";


export const ListPendientsItem = () =>
{

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () =>
    {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item w-full">
            <div className={`accordion-header flex flex-row items-center justify-between text-black p-2 `} >
                <div className='flex items-center gap-2'>
                    <span className='text-slate-800'> <CheckBoxCustom /> </span>
                    <p onClick={toggleAccordion}>Pendientes a realizar por parte de el abogado asignado</p>
                </div>
                <div className="md:flex items-center justify-end gap-5 w-1/2 hidden">
                    <h1> <b>Abogado:</b> Calixto </h1>
                    <div className='flex items-center justify-center gap-5 w-1/2 '>
                        <PointersFamily />
                        <button className='hover:text-blue-600'><RiEdit2Line /></button>
                        <button className='hover:text-red-600'><RiDeleteBin5Line /></button>
                    </div>
                </div>
            </div>
            <div
                className={`transition-all ease-in-out duration-700 bg-slate-50 pl-4 md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'
                    } overflow-hidden`}
            >
                <div className={`flex flex-col gap-2 transition-all duration-300 ease-in-out p-2 `}>
                <div className="flex items-center justify-end gap-5 w-full ">
                    <h1> <b>Abogado:</b> Calixto </h1>
                    <div className='flex items-center justify-center gap-5 w-1/2 '>
                        <PointersFamily />
                        <button className='hover:text-blue-600'><RiEdit2Line /></button>
                        <button className='hover:text-red-600'><RiDeleteBin5Line /></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
