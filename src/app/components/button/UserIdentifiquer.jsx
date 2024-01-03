import React from 'react'

export const UserIdentifiquer = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-5 border-t-[1px] border-slate-700 pt-2'>
        <div className='rounded-full'>
            <img src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="image" className='rounded-full w-8 h-8 ring-1' />
        </div>
        <div>
            <h1 className='text-sm'>Nombre de usuario</h1>
            <h1 className='text-xs text-gray-400'>Cargo</h1>
        </div>
    </div>
  )
}
