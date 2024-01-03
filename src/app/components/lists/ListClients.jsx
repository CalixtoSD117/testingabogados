import axios from 'axios';
import ListClientsItem from './ListClientsItem';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ListClients({handleClientAdded, setopen, setModalOpen, setSelectedClientId, deleteClient, clientes, setClientes}) {
    
    useEffect(() => {
        const getClients = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/api/clients');
                setClientes(data);
            } catch (error) {
                console.error("Error al cargar los clientes", error);
            }
        }

        getClients();
    }, [handleClientAdded]); // El segundo argumento vacío [] asegura que el efecto solo se ejecute en el montaje inicial.

    const openModal = (id) => {
        setSelectedClientId(id);
        setModalOpen(true);
    };

    const modifyClient = async (id) => {
        try {
            await axios.put(`http://localhost:3000/api/clients/${id}`);
            toast.success("Cliente modificado");
            setClientes((clientesAnt) => clientesAnt.filter((cliente) => cliente.id !== id));
        } catch (error) {
            console.error("Error al modificar el cliente", error);
        }
    }

    return (
        <div className='p-2'>
            <div className='bg-white rounded-md pb-1 mt-5'>
                <div className='bg-[#2D0002] rounded-md'>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="text-white border-b">
                                <tr>
                                    <th className="p-3 text-center">Nombre</th>
                                    <th className="p-3 text-center">Razon social</th>
                                    <th className="p-3 text-center">RFC</th>
                                    <th className="p-3 text-center">Correo</th>
                                    <th className="p-3 text-center">Teléfono</th>
                                    <th className="p-3 text-center">Celular</th>
                                    <th className="p-3 text-center">Direccion</th>
                                    <th className="p-3 text-center">Alias</th>
                                    <th className="p-3 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.length > 0 ? (
                                    clientes.map((cliente) => (
                                        <ListClientsItem cliente={cliente} key={cliente.id} eliminar={deleteClient} setopen={setopen} modificar={modifyClient} openModal={openModal} />
                                    ))
                                ) : (
                                    <tr>
                                        <th colSpan="6" className="flex items-center justify-center text-xl absolute">
                                            <h1>No se encuentra ningún dato.</h1>
                                        </th>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListClients;
