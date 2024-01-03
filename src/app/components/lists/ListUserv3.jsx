
import { users } from '@/app/constants';
import { useEffect, useState } from 'react';
import ItemListUserv3 from './ItemListUserv3';
import { ClipLoader } from 'react-spinners';
import { EditInformationDoc } from '../Modals/EditInformationDoc';

export const ListUserv3 = ({handleopenedit}) =>
{

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>
    {
        // Simulando una llamada asincrónica para cargar los datos
        setIsLoading(true)
        setTimeout(() =>
        {
            setIsLoading(false);
        }, 2000); // Simulando una carga de 2 segundos
    }, [])


    return (
        <>
        <div className='p-2'>
            <div className=' bg-white rounded-md pb-1 mt-5 '>
                <div className=' bg-[#2D0002] rounded-md'>
                    <div className="overflow-x-auto  ">
                        <table className=" w-full ">
                            <thead className="text-white border-b ">
                                <tr>
                                    <th className="p-3 text-center">ID</th>
                                    <th className="p-3 text-center">Cliente</th>
                                    <th className="p-3 text-center">Asunto</th>
                                    <th className="p-3 text-center">Info cliente</th>
                                    <th className="p-3 text-center">Fecha creación</th>
                                    <th className="p-3 text-center">Actualizaciones</th>
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
                                            <ItemListUserv3 key={user.id} asunto={user.asunto} cliente={user.cliente} fecha={user.fechacreacion} id={user.id} infocliente={user.infocliente}  handleopenedit={handleopenedit}/>
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
        </>
    )
}
