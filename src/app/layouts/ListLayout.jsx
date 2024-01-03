import { RiFolderAddLine, RiPrinterLine, RiSearch2Line } from "react-icons/ri"
import { Search } from "../components/searchs/Search"
import Link from "next/link"

export const ListLayout = ({ children, title, icon, link, hidden_imprimir, hidden_nuevo }) =>
{
    return (
        <>
            <div className='p-2 flex flex-col lg:flex-row gap-4 items-center justify-between '>
                <div className='flex  items-center justify-center gap-5 text-3xl font-medium'>
                    {icon}
                    <h1>{title}</h1>
                </div>

                <div className="flex md:flex-row gap-4" >
                    <button className={`bg-[#2D0002] text-white font-medium  py-2 px-2 mt-1 rounded-md flex gap-2 items-center justify-center ${hidden_imprimir}`}><RiPrinterLine /> Imprimir</button>
                    <button className={`bg-[#2D0002] text-white font-medium  py-2 px-2 mt-1 rounded-md flex gap-2 items-center justify-center ${hidden_nuevo}`}><RiFolderAddLine /> <Link href={link} > Agregar uno nuevo </Link> </button>
                </div>
            </div>
            <Search/>
            <div className="">
                {children}
            </div>
        </>
    )
}
