import Link from 'next/link'
import React from 'react'

export const Complete = ({link}) =>
{
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>

        <div className='text-green-400'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" className="fill-current text-green-400" />
  <path d="M7 13l3 3 7-7" className="stroke-current text-white stroke-2" strokeLinecap='round' />
</svg>



        </div>

        <div className='mt-3 text-xl font-semibol uppercase text-green-500'>
          <h1>Completado</h1>
        </div>

        <div className='text-lg font-semibold text-gray-500'>
          Registro guardado correctamente
        </div>

        <Link href={link} className='mt-10'>
          <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100 '>
            Regresar al inicio
          </button>
        </Link>

      </div>
    </div>
  )
}
