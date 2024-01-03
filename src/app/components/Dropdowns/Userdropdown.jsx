import { userimage } from "@/app/assets"
import Image from "next/image"


export const Userdropdown = ({click}) => {
  return (
    <button onClick={click} className="w-full">
        <div className=' h-[55px] flex items-center'>
          <div className="flex items-center pl-2 justify-between gap-4">
            <Image src={userimage} priority alt='user' className="w-8 h-8 rounded-full object-cover ring-1 ring-[#]" />
            <div className="text-sm flex flex-col justify-center items-start">
              <h1>Nombre de usuario</h1>
              <span>Cargo</span>
            </div>
          </div>
        </div>
      </button>
  )
}
