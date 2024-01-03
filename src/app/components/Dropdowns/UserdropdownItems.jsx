import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { TbDoorExit } from "react-icons/tb";

export const UserdropdownItems = ({ handleOpen_close_ModalPass }) =>
{
    return (
        <div className='absolute z-50 top-[3.5rem] -right-5 w-[200px] rounded-lg border-[1px] border-[#2D0002]  bg-white  dropdownporfile text-[16px] shadow-md animate__animated animate__fadeIn'>
            <div className='p-2 border-b'>
                <button onClick={handleOpen_close_ModalPass} className='w-full text-start flex items-center gap-2'>
                    <FaUserEdit />

                    Editar Perfil

                </button>
            </div>
            <div className='p-2 hover:bg-slate-50 rounded-b-lg group '>
                <button className='w-full text-start flex items-center gap-2'>
                    <TbDoorExit className='group-hover:text-[#2D0002]' />
                    
                        Cerrar Sesión
                    
                </button>
            </div>
        </div>
    )
}
