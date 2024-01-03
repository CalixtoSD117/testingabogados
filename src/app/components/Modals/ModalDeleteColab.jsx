import axios from 'axios'
import React from 'react'

export const ModalDeleteColab = ({ setopen, open, id, deleteColab }) => {

    const modalClose = () => {
        setopen(false); // Assuming setopen is used to control the modal's open state
    };

    return (
        <>
            {
                open ?
                    <div className='bg-black bg-opacity-25 h-screen w-full fixed top-0 left-0 z-50'>
                        <div className='flex justify-center items-center h-[100vh]'>
                            <div className='bg-white rounded md:w-auto w-[350px]'>
                                <div className='p-4'>
                                    <div className='flex flex-col justify-center items-start gap-5'>
                                        <h1 className='text-2xl font-semibold text-gray-700'>Eliminar Colaborador {id}</h1>
                                        <span className='text-gray-500'>¿Estas seguro de que quieres eliminar este Colaborador?</span>
                                        <span className='text-gray-500'>Esta acción no se puede deshacer.</span>
                                    </div>
                                    <div className='flex flex-row gap-2 justify-between items-center mt-5'>
                                        <button onClick={modalClose} className='bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600 transition-all'>
                                            Cancelar
                                        </button>
                                        <button onClick={() => deleteColab(id)} className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all'>
                                            Confirmar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}
