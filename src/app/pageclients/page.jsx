'use client'
import { RiFolderAddLine, RiPassPendingLine } from 'react-icons/ri'
import { Search } from '../components/searchs/Search'
import { useState } from 'react'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import { Navbar } from '../components/navbars/Navbar'
import { Sidebar } from '../components/navbars/Sidebar'
import { FaUsers } from 'react-icons/fa'
import { NewClientModal } from '../components/Modals/NewClientModal'
import ListClients from '../components/lists/ListClients'
import toast, { Toaster } from 'react-hot-toast'
import { ModalDelete } from '../components/Modals/ModalDelete'
import axios from "axios";

const Page = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [open, setopen] = useState(false)

  const handleopen = () => {
    setopen(true)
  }

  const [openmenu, setopenmenu] = useState(false)

  const handleopenmenu = () => {
    setopenmenu(!openmenu)
  }

  const handleClientAdded = () => {
    //toast
    toast.success('Cliente añadido!');
  };

  const deleteClient = async (id) => {
        
    try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        toast.success("Cliente eliminado");
        setClientes((clientesAnt) => clientesAnt.filter((cliente) => cliente.id !== id));
        setModalOpen(false);
    } catch (error) {
        console.error("Error al eliminar el cliente", error);
    }
}
  
  return (
    <>
      <SidebarPhone openmenu={openmenu} />
      <Navbar handleopenmenu={handleopenmenu} />
      <Sidebar />
      <NewClientModal open={open} handleClientAdded={handleClientAdded} setopen={setopen} />
      <ModalDelete setopen={setModalOpen} open={isModalOpen} id={selectedClientId} deleteClient={deleteClient} />
      <div className="lg:ml-[220px] pt-[80px]  md:p-16 bg-slate-100 min-h-screen">
        <div className='animate__animated animate__fadeInLeft'>
          <div className='flex md:flex-row flex-col gap-3 justify-between items-center p-2'>
            <div className='flex  items-center justify-center gap-5 text-3xl font-medium'>
              <span><FaUsers /></span>
              <h1>Clientes</h1>
            </div>
            <div>
              <button onClick={handleopen} className={`bg-[#2D0002] text-white font-medium  py-2 px-2 mt-1 rounded-md flex gap-2 items-center justify-cente`}><RiFolderAddLine /> Agregar uno nuevo </button>
            </div>
          </div>

          <div>
            <Search />
          </div>

          <ListClients handleClientAdded={handleClientAdded} setopen={setopen} setModalOpen={setModalOpen} setSelectedClientId={setSelectedClientId} deleteClient={deleteClient} clientes={clientes} setClientes={setClientes}/> 

        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

    </>
  )
}

export default Page