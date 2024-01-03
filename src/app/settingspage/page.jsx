'use client'
import { useState } from 'react'
import { RiCloseCircleFill, RiSave2Line, RiSettings4Line } from 'react-icons/ri'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import { Navbar } from '../components/navbars/Navbar'
import { Sidebar } from '../components/navbars/Sidebar'

const Page = () =>
{
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

            <div className="lg:ml-[220px] pt-[80px]  md:p-16 bg-slate-100 min-h-screen">
                <div className='p-2 animate__animated animate__fadeInLeft'>
                    <div className='flex items-center text-3xl gap-4'>
                        <span><RiSettings4Line /></span>
                        <h1>Configuracion del despacho</h1>
                    </div>

                    <form className='mt-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>Nombre del despacho</label>
                                <input type="text" className='p-1 outline-none ring-1 ring-[#2D0002] rounded-md' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>Razón social</label>
                                <input type="text" className='p-1 outline-none ring-1 ring-[#2D0002] rounded-md' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>RFC</label>
                                <input type="text" className='p-1 outline-none ring-1 ring-[#2D0002] rounded-md' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>País</label>
                                <input type="text" className='p-1 outline-none ring-1 ring-[#2D0002] rounded-md' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>Direccción</label>
                                <input type="text" className='p-1 outline-none ring-1 ring-[#2D0002] rounded-md' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>Teléfono</label>
                                <input type="text" className='p-1 outline-none ring-1 ring-[#2D0002] rounded-md' />
                            </div>


                        </div>

                        <div className='mt-5'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[18px] font-semibold'>Descripción</label>
                                <textarea name="" id="" cols="5" rows="5" className='rounded-md ring-1 ring-[#2D0002] outline-none pl-2' ></textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-end w-full gap-10 mt-10 text-white text-[16px]'>
                            <button className='w-32 py-1 rounded-md bg-slate-500 flex items-center justify-center gap-2'>
                                <RiCloseCircleFill />
                                Cancelar
                            </button>
                            <button className='w-32 py-1 rounded-md bg-[#297C1C] flex items-center justify-center gap-2'>
                                <RiSave2Line />
                                Guardar
                            </button>

                        </div>
                    </form>

                </div>
            </div>
            <div className='p-2 md:pr-16 md:pt-2 md:pb-2 lg:ml-[220px] text-center md:text-end text-[12px] md:text-[16px]'>
                <span>© Todos los derechos reservados - by <a href="https://dorian11-byte.github.io/portfolio-dorian/" className='text-[#1137FF]'>Dorian Raygoza</a></span>
            </div>
        </>
    )
}

export default Page