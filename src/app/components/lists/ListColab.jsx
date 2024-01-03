'use client';
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { ListColabItem } from './ListColabItem';
import axios from "axios";

const ListColab = ({users, setusers, handleColabAdded, setopen, setModalOpen, setselectedColabId, deletecolab}) =>
{

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getClients = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/api/colaboradores');
                setusers(data);
            } catch (error) {
                console.error("Error al cargar los clientes", error);
            }
        }

        getClients();
    }, [handleColabAdded]); 

    const openModal = (id) => {
        setselectedColabId(id);
        setModalOpen(true);
    };

    return (
        <div className='p-2'>
            <div className=' bg-white rounded-md pb-1 mt-5 '>
                <div className=' bg-[#2D0002] rounded-md'>
                    <div className="overflow-x-auto  ">
                        <table className=" w-full ">
                            <thead className="text-white border-b ">
                                <tr>
                                    <th className="p-3 text-center">ID</th>
                                    <th className="p-3 text-center">Nombre</th>
                                    <th className="p-3 text-center">Teléfono</th>
                                    <th className="p-3 text-center">Correo</th>
                                    <th className="p-3 text-center">Contraseña</th>
                                    <th className="p-3 text-center">Rol</th>
                                    <th className="p-3 text-center">Cargo</th>
                                    <th className="p-3 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody >
                                {isLoading ? (

                                    <tr>
                                        <td className="flex items-center justify-center text-xl absolute">
                                            <h1>Cargando...</h1>
                                            <ClipLoader
                                                color={'#000000'}
                                                loading={isLoading}
                                                size={30}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                            />
                                        </td>
                                    </tr>

                                ) : (
                                    users.length > 0 ? (
                                        users.map((user) => (
                                            <ListColabItem  key={user.id} users={user} id={user.id} nombre={user.nombre} correo={user.correo} telefono={user.telefono} rol={user.rol} cargo={user.cargo} openModal={openModal} />
                                        ))
                                    ) : (
                                        <tr>
                                            <th colSpan="6" className="flex items-center justify-center text-xl absolute">
                                                <h1>No se encuentra ningún dato.</h1>
                                            </th>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListColab