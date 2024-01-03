import React from 'react'
import { backlog } from '../../assets'
import Image from 'next/image'
import Link from 'next/link'


const LoginForm = () =>
{
    return (
        <div className='h-screen w-full flex flex-row items-center justify-center '>
            <div className='w-full flex flex-col items-center justify-center'>

                <form action="" className='flex flex-col gap-10 justify-center items-start md:w-[500px]'>

                    <h1 className='text-3xl font-bold'>Inicio de Sesión</h1>

                    <input type="email" name="" placeholder='Email'  className='w-full outline-none focus:ring-yellow-800 ring-1 ring-gray-800 p-2 rounded-md' />
                    <input type="password" autoComplete='off' name="" placeholder='Contraseña' className='w-full outline-none focus:ring-yellow-800 ring-1 ring-gray-800 p-2 rounded-md' />

                    <div className='flex flex-row gap-5 items-center justify-between w-full mt-5'>
                        <div className='flex flex-row gap-2 items-center justify-center'>
                            <input type="checkbox" />
                            <span>Recordarme</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center justify-center'>
                            <a href="" className='text-blue-600'>Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <button className='bg-[#2D0002] px-4 py-2 rounded-xl mt-3'>
                        <span className='text-white'>
                            <Link href='homepage'>Iniciar Sesión</Link>
                        </span>
                    </button>
                </form>
            </div>
            <div className='w-full h-full hidden md:block '>
                <Image src={backlog} className='w-full h-screen' alt="" />
            </div>
        </div>
    )
}

export default LoginForm