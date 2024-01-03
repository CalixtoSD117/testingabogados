'use client'
import { useState } from 'react'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import { RiAddFill, RiCheckboxFill, RiDeleteBin5Line, RiEdit2Line, RiFolderAddLine, RiImageLine, RiPassPendingLine, RiSearch2Line } from 'react-icons/ri'
import { BsCalendarCheck } from "react-icons/bs";
import { NewPend } from '../components/Modals/NewPend'
import { ListPendientsItem } from '../components/lists/ListPendientsItem'
import { Sidebar } from '../components/navbars/Sidebar';
import { Navbar } from '../components/navbars/Navbar';


const Page = () =>
{

    const [open, setopen] = useState(false)

    const handleopen = () =>
    {
        setopen(!open)
    }

    const [openmenu, setopenmenu] = useState(false)

    const handleopenmenu = () =>
    {
        setopenmenu(!openmenu)
    }

    return (
        <>
            <SidebarPhone openmenu={openmenu} />
            <Navbar handleopenmenu={handleopenmenu} />
            <Sidebar />

            {open && <NewPend handleopen={handleopen} />}
            
                <button onClick={handleopen} className='text-white md:hidden z-50 fixed right-5 bottom-5 bg-[#2D0002] h-10 w-10 rounded-full flex items-center justify-center text-3xl'>
                    <RiAddFill/>
                </button>
            

            <div className="lg:ml-[220px] pt-[80px] p-4 md:p-16 bg-slate-100 min-h-screen">
                <div className='animate__animated animate__fadeInLeft'>
                    <div className='flex md:flex-row flex-col gap-3 justify-between items-center p-2'>
                        <div className='flex  items-center justify-center gap-5 text-3xl font-medium'>
                            <span><BsCalendarCheck /></span>
                            <h1>Pendientes</h1>
                        </div>
                    </div>
                    {/* Seccion de Botones */}
                    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 mt-2'>

                        <div className='bg-white w-full md:w-[300px] p-2  rounded-lg md:h-[425px] shadow-md text-[15px]'>
                            <div className='flex flex-row md:flex-col justify-start items-center pt-2'>

                                <div className='w-full flex flex-col justify-center items-center md:w-auto'>
                                    <div className='md:block hidden'>
                                        <button onClick={handleopen} className='bg-[#2D0002] px-2 text-white py-2 rounded-md flex items-center justify-center gap-2'>
                                            <RiAddFill className='text-[20px]' />
                                            Agregar pendiente
                                        </button>
                                    </div>
                                    <div className='w-full justify-center items-center'>
                                        <div className='mt-4 flex flex-col justify-center items-start'>
                                            <ul className='grid grid-cols-2 md:grid-cols-1 place-items-start gap-4 w-full'>
                                                <li className='flex items-center justify-start gap-2'>
                                                    <RiImageLine className='text-[#B4B4B4]' />
                                                    Mis pendientes
                                                </li>
                                                <li className='flex items-center justify-start gap-2'>
                                                    <RiCheckboxFill className='text-[#B4B4B4]' />
                                                    Completadas
                                                </li>
                                                <li className='flex items-center justify-start gap-2'>
                                                    <RiDeleteBin5Line className='text-[#B4B4B4]' />
                                                    Eliminadas
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <h1 className='font-extrabold'>Tipo</h1>
                                            <div className='grid grid-cols-2 md:grid-cols-1 place-items-start gap-2'>

                                                <div className='flex items-center justify-start  gap-2'>
                                                    <div className='h-3 w-3 bg-[#029445] rounded-full' />
                                                    <span>Familiar</span>
                                                </div>

                                                <div className='flex items-center justify-start  gap-2'>
                                                    <div className='h-3 w-3 bg-[#FE6B00] rounded-full' />
                                                    <span>Civil</span>
                                                </div>

                                                <div className='flex items-center justify-start  gap-2'>
                                                    <div className='h-3 w-3 bg-[#1300EF] rounded-full' />
                                                    <span>Laboral</span>
                                                </div>

                                                <div className='flex items-center justify-start  gap-2'>
                                                    <div className='h-3 w-3 bg-[#D60067] rounded-full' />
                                                    <span>Administrativo</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Seccion de Pendientes Lista */}

                        <div className='bg-white w-full rounded-lg h-[425px] shadow-md'>
                            <div className='border-b p-2 flex items-center justify-start gap-2 text-[20px] font-normal'>
                                <span><RiSearch2Line /></span>
                                <input type="text" placeholder='Buscar pendiente' className='rounded-md outline-none w-full' />
                            </div>
                            <div className='max-h-[370px] overflow-y-auto'>
                                {/* item */}

                                <ListPendientsItem/>
                                
                                

                                {/* Agrega más elementos similares si es necesario */}
                            </div>
                        </div>


                        {/* fin seccion lista */}
                    </div>

                </div>

            </div>

            <div className='p-2 md:pr-16 md:pt-2 md:pb-2 lg:ml-[220px] text-center md:text-end text-[12px] md:text-[16px]'>
                <span>© Todos los derechos reservados - by <a href="https://github.com/dorian11-byte" className='text-[#1137FF]'>Dorian Raygoza</a></span>
            </div>
        </>
    )
}

export default Page