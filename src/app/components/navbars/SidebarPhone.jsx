'use client'
import { RiArrowDropUpLine, RiDashboardFill, RiSettings3Fill } from "react-icons/ri"
import { RxDashboard } from "react-icons/rx";
import { BsCalendarCheck, BsCalendarDate, BsPersonWorkspace } from "react-icons/bs";
import { FaBalanceScale, FaGavel, FaRegAddressCard, FaUserEdit, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { Dropdown } from "../Dropdowns/Dropdown";
import { LinkButtonCustom } from "../LinksButtons/LinkButtonCustom";
import { LinkButtonsSpecials } from "../LinksButtons/LinkButtonsSpecials";
import { TbDoorExit } from "react-icons/tb";
import ChangePasswordModal from "../Modals/ChangePasswordModal";
import { useState } from "react";
import { userimage } from "@/app/assets";
import Image from "next/image";

export const SidebarPhone = ({ openmenu }) => {

    const [open_close_ModalPass, setopen_close_ModalPass] = useState(false)

    const handleOpen_close_ModalPass = () => {
        setopen_close_ModalPass(!open_close_ModalPass)
    }

    return (
        <nav className={` h-full lg:hidden fixed bg-white border-r-[1px] border-slate-700 z-50 transition-all duration-200 ease-in-out flex flex-col justify-between ${openmenu ? 'left-0' : '-left-full'}`}>

            {
                open_close_ModalPass && <ChangePasswordModal handleOpen_close_ModalPass={handleOpen_close_ModalPass} />
            }

            <div>
                <div className=' h-[55px] flex items-center'>
                    <div className="flex items-center pl-2 justify-between gap-4">
                        <Image src={userimage} alt='user' className="w-8 h-8 rounded-full object-cover " />
                        <div className="text-sm">
                            <h1>Nombre de usuario</h1>
                            <span>Cargo</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-baseline overflow-y-auto ediscroll h-[450px] relative w-full ">

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

                    <Dropdown title="Fiscalia" bg_color="bg-white" text_color="text-gray-500" icon={<FaBalanceScale />}>
                        <Link href="fiscaliaestatal">Estatal</Link>
                        <Link href="fiscaliafederal">Federal</Link>
                        <Link href="fiscaliaadolecentes">Adolecentes</Link>

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
                <LinkButtonCustom name="Configuracion" icon={<RiSettings3Fill className="text-slate-800 animate-spin" />} link="settingspage" />
                <LinkButtonsSpecials name="Cambiar contraseña" icon={<FaUserEdit />} accion={handleOpen_close_ModalPass} />
                <LinkButtonsSpecials name="Cerrar sesion" icon={<TbDoorExit />} />
            </div>



        </nav>
    )
}
