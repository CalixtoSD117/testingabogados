'use client'
import { RiFolderAddLine, RiPassPendingLine } from 'react-icons/ri'
import ListColab from '../components/lists/ListColab'
import { Search } from '../components/searchs/Search'
import { useState } from 'react'
import { NewColabModal } from '../components/Modals/NewColabModal'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import { Navbar } from '../components/navbars/Navbar'
import { Sidebar } from '../components/navbars/Sidebar'
import toast, { Toaster } from 'react-hot-toast'
import { ModalDeleteColab } from '../components/Modals/ModalDeleteColab'
import axios from 'axios'

const Page = () =>{

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedColabId, setselectedColabId] = useState(null);
  const [users, setusers] = useState([])
  const [open, setopen] = useState(false)

  const handleopen = () =>{
    setopen(!open)
  }

  const [openmenu, setopenmenu] = useState(false)

  const handleopenmenu = () =>{
    setopenmenu(!openmenu)
  }

  const handleColabAdded = () => {
    //toast
    toast.success('Colaborador añadido!');
  };

  const deleteColab = async (id) => {
        
    try {
        await axios.delete(`http://localhost:3000/api/colaboradores/${id}`);
        toast.success("Colaborador eliminado");
        setusers((usersAnt) => usersAnt.filter((user) => user.id !== id));
        setModalOpen(false);
    } catch (error) {
        console.error("Error al eliminar el cliente", error);
    }
}


  return (
    <>
    <SidebarPhone openmenu={openmenu}/>
      <Navbar handleopenmenu={handleopenmenu}/>
      <Sidebar />
      <NewColabModal open={open} setopen={setopen} handleopen={handleopen} handleColabAdded={handleColabAdded}/>
      <ModalDeleteColab setopen={setModalOpen} open={isModalOpen} id={selectedColabId} deleteColab={deleteColab} />
      <div className="lg:ml-[220px] pt-[80px]  md:p-16 bg-slate-100 min-h-screen">
        <div className='animate__animated animate__fadeInLeft'>
          <div className='flex md:flex-row flex-col gap-3 justify-between items-center p-2'>
            <div className='flex  items-center justify-center gap-5 text-3xl font-medium'>
              <span><RiPassPendingLine /></span>
              <h1>Colaboradores</h1>
            </div>
            <div>
              <button onClick={handleopen} className={`bg-[#2D0002] text-white font-medium  py-2 px-2 mt-1 rounded-md flex gap-2 items-center justify-cente`}><RiFolderAddLine /> Agregar uno nuevo </button>
            </div>
          </div>

          <div>
            <Search/>
          </div>

          <ListColab users={users} setusers={setusers} handleColabAdded={handleColabAdded} setopen={setopen} setModalOpen={setModalOpen} setselectedColabId={setselectedColabId} deletecolab={deleteColab}/>

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