
import { RiSearch2Line } from "react-icons/ri"

export const Search = () =>
{
    return (
        <div className="flex flex-row items-center justify-start gap-4 w-full mt-10 p-2">
            <div className="relative   w-[350px]">
                <input type="text" placeholder="Buscar Caso..." className="border border-gray-400 py-2 px-4 pr-7 rounded-full w-full outline-none" />
                <RiSearch2Line className="absolute top-[12px] right-2 text-xl" />
            </div>
            <div>
                <button className="bg-[#2D0002] text-white p-2 rounded-full px-6">Buscar</button>
            </div>
        </div>
    )
}
