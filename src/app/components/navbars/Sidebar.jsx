'use client'
import Link from "next/link"
import { Dropdown } from "../Dropdowns/Dropdown"
import { RiDashboardFill, RiSettings3Fill } from "react-icons/ri"
import { RxDashboard } from "react-icons/rx";
import { BsCalendarCheck, BsCalendarDate, BsPersonWorkspace } from "react-icons/bs";
import { FaBalanceScale, FaGavel, FaRegAddressCard, FaUsers } from "react-icons/fa";
import { Userdropdown } from "../Dropdowns/Userdropdown";
import { UserdropdownItems } from "../Dropdowns/UserdropdownItems";
import { useState } from "react";
import ChangePasswordModal from "../Modals/ChangePasswordModal";
import { LinkButtonCustom } from "../LinksButtons/LinkButtonCustom";


export const Sidebar = () => {

  const [openPorfile, setopenPorfile] = useState(false)

  const handleOpenPorfile = () => {
    setopenPorfile(!openPorfile)
  }
  const [open_close_ModalPass, setopen_close_ModalPass] = useState(false)

  const handleOpen_close_ModalPass = () => {
    setopen_close_ModalPass(!open_close_ModalPass)
  }

  return (
    <nav className='lg:w-[220px] h-screen fixed bg-white border-r-[1px] border-slate-700 lg:flex flex-col justify-between hidden z-50'>
      <div>
        {/* User DropDown */}
        <Userdropdown click={handleOpenPorfile} />
        {
          openPorfile && <UserdropdownItems handleOpen_close_ModalPass={handleOpen_close_ModalPass} />
        }

        {
          open_close_ModalPass && <ChangePasswordModal handleOpen_close_ModalPass={handleOpen_close_ModalPass} />
        }


        <div className="flex flex-col items-baseline overflow-y-auto ediscroll md:h-[500px]  xl:h-[620px] relative w-full ">

          <LinkButtonCustom icon={<RiDashboardFill />} link="homepage" name="Dashboard" />

          <Dropdown title="Cuadrante" bg_color="bg-white" text_color="text-gray-500" icon={<RxDashboard />}>
            <Link href="familiarpage">Familiar </Link>
            <Link href="civilpage">Civil </Link>
            <Link href="mercantilpage"> Mercantil</Link>
            <Link href="amparopage"> Amparo</Link>
            <Link href="penalpage"> Penal</Link>
            <Link href="administrativopage"> Administrativo</Link>
          </Dropdown>

          <Dropdown title="Laboral" bg_color="bg-white" text_color="text-gray-500" icon={<BsPersonWorkspace />}>
            <Link href="laboralestatal">Estatal</Link>
            <Link href="laboralfederal">Federal</Link>
            <Link href="laboraltae">T.A.E</Link>

          </Dropdown>

          <Dropdown title="Fiscalía" bg_color="bg-white" text_color="text-gray-500" icon={<FaBalanceScale />}>
            <Link href="fiscaliaestatal">Estatal</Link>
            <Link href="fiscaliafederal">Federal</Link>
            <Link href="fiscaliaadolecentes">Adolescentes</Link>

          </Dropdown>

          <Dropdown title="Juzgado Penal" bg_color="bg-white" text_color="text-gray-500" icon={<FaGavel />}>
            <Link href="juzgadoestatal">Estatal</Link>
            <Link href="juzgadofederal">Federal</Link>

          </Dropdown>


          <LinkButtonCustom name="Agenda" link="agendapage" icon={<BsCalendarDate />} />

          <LinkButtonCustom name="Pendientes" link="pendientespage" icon={<BsCalendarCheck />} />

          <LinkButtonCustom name="Clientes" link="pageclients" icon={<FaUsers />} />

          <LinkButtonCustom name="Colaboradores" link="pagecolaboradores" icon={<FaRegAddressCard />} />



        </div>
      </div>

      <div>
        <div className="w-full justify-center items-center flex">
          <hr className="border-t-[1px] border-slate-800 w-52" />
        </div>
        <LinkButtonCustom name="Configuración" icon={<RiSettings3Fill className="text-slate-800 animate-spin" />} link="settingspage" />
      </div>

    </nav>
  )
}
