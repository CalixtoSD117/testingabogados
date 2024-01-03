import React from 'react'
import { RiCloseCircleFill, RiSave2Line } from 'react-icons/ri'

export const NewPend = ({handleopen}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="md:w-[500px] w-[350px] bg-white rounded-xl animate__animated animate__zoomIn">
        <div className="border-b pl-4">
          <h1 className="text-[27px] font-semibold text-start py-2">Nuevo pendiente</h1>
        </div>

        <form className="pl-4 pr-4 pt-5 white md:w-[500px] h-[450px] rounded-b-xl flex flex-col justify-between ">
          <div className="flex flex-col justify-center items-center gap-5">

            <div className='flex flex-col gap-2 items-start justify-start w-full'>
                <label >Título</label>
                <input type="text" name="" id="" placeholder='' className='w-full outline-none ring-1 ring-[#2D0002] rounded-md p-1' />
            </div>

            <div className='flex flex-col gap-2 items-start justify-start w-full'>
                <label >Descripción</label>
                <textarea name="" id="" cols="3" rows="3" placeholder='' className='ring-1 ring-[#2D0002] outline-none w-full rounded-md p-1'>

                </textarea>
            </div>

            <div className='flex flex-col gap-2 items-start justify-start w-full'>
                <label >Abogado asignado</label>
                <input type="text" name="" id="" placeholder='' className='w-full outline-none ring-1 ring-[#2D0002] rounded-md p-1' />
            </div>

            <div className='flex flex-col gap-2 items-start justify-start w-full'>
                <label >Tipo de caso</label>
                <input type="text" name="" id="" placeholder='' className='w-full outline-none ring-1 ring-[#2D0002] rounded-md p-1' />
            </div>
    
          </div>

          <div className="mb-3 flex flex-row justify-between items-center">
            <button onClick={handleopen} className="px-4 py-2 bg-gray-500 rounded-lg text-white flex items-center gap-2 ">
              <span> <RiCloseCircleFill/> </span> Cancelar
            </button>
            <button className="px-4 py-2 bg-[#297C1C] rounded-lg text-white flex items-center gap-2 ">
              <span> <RiSave2Line/> </span> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
