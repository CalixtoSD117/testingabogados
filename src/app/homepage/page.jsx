'use client'
import { RiHome4Line } from 'react-icons/ri'
import CardCount from '../components/cards/CardCount'
import Link from 'next/link'
import { useState } from 'react'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import TodoList from '../components/lists/TodoList'
import LastCasesMaking from '../components/lists/LastCasesMaking'
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

                <div className='animate__animated animate__fadeInLeft p-5 md:p-0'>
                    <div>
                        <div className='mt-2 text-3xl font-medium flex gap-4 items-center justify-center lg:justify-start'>
                            <RiHome4Line />
                            <h1>Inicio</h1>
                        </div>
                    </div>

                    <div className='mt-10 md:mt-8 flex flex-col gap-5 md:flex-row items-center justify-between '>
                        <CardCount count={10} title="Clientes" />
                        <CardCount count={10} title="Casos activos" />
                        <CardCount count={10} title="Pendientes" />
                        <CardCount count={10} title="Usuarios   " />
                    </div>

                    <div className='mt-10 flex flex-col md:flex-row items-center justify-between gap-5'>
                        <div className='w-full'>
                            <LastCasesMaking />
                        </div>
                        <div className='w-full'>
                            <TodoList />
                        </div>
                    </div>

                    <div className='mt-10 '>
                        <div>
                            <h1 className='text-[20px] font-medium'>Accesos Directos</h1>
                        </div>
                        <aside className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 text-center text-white mt-5'>
                            <Link href="familiarpage" className='px-3 py-2 bg-[#2D0002] rounded-lg' > Casos familiares</Link>
                            <Link href="" className='px-3 py-2 bg-[#2D0002] rounded-lg' > Casos penales</Link>
                            <Link href="" className='px-3 py-2 bg-[#2D0002] rounded-lg' > Casos civiles</Link>
                            <Link href="" className='px-3 py-2 bg-[#2D0002] rounded-lg' > Casos mercantil</Link>
                        </aside>
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