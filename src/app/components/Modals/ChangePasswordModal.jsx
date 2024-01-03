import React from 'react'
import { RiCloseCircleFill, RiSave2Line } from 'react-icons/ri'

const ChangePasswordModal = ({handleOpen_close_ModalPass}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="md:w-[500px] w-[300px] bg-white rounded-xl animate__animated animate__zoomIn">
        <div className="border-b pl-4">
          <h1 className="text-[27px] font-semibold text-start py-2">Cambiar contraseña</h1>
        </div>

        <form className="pl-4 pr-4 pt-5 white md:w-[500px] h-[300px] rounded-b-xl flex flex-col justify-between ">
          <div className="flex flex-col justify-center items-center gap-5">

            <div className='w-full flex flex-col gap-2'>
              <label>Contraseña nueva</label>
              <input type="password" name="" id="" className='ring-1 outline-none p-1 rounded-md ring-[#2D0002] w-full' />
            </div>

            <div className='w-full flex flex-col gap-2'>
              <label>Confirmar nueva contraseña</label>
              <input type="password" name="" id="" className='ring-1 outline-none p-1 rounded-md ring-[#2D0002] w-full' />
            </div>
    
          </div>

          <div className="mb-3 flex flex-row justify-between items-center">
            <button onClick={handleOpen_close_ModalPass} className="px-4 py-2 bg-gray-500 rounded-lg text-white flex items-center gap-2 ">
              <span> <RiCloseCircleFill/> </span> Cancelar
            </button>
            <button className="px-4 py-2 bg-[#297C1C] rounded-lg text-white flex items-center gap-2 ">
              <span> <RiSave2Line/> </span> Cambiar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordModal
