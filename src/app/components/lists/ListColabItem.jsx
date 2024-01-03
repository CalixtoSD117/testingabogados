import { RiArrowDownSLine, RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export const ListColabItem = ({id, nombre, telefono, correo, rol, cargo, openModal, users}) =>
{
  return (
    <tr className="transition-all duration-500 ease-in-out hover:bg-gray-100  text-black font-medium border-b ">
      <td className="p-2 text-center bg-white">{id}</td>
      <td className="p-2 text-center bg-white ">{nombre}</td>
      <td className="p-2 text-center bg-white  ">{telefono}</td>
      <td className="p-2 text-center bg-white ">
        {correo}
      </td>
      <td className="p-2 text-center bg-white  ">**********</td>
      <td className="p-2 text-center bg-white  ">{rol}</td>
      <td className="p-2 text-center bg-white  ">{cargo}</td>
      <td className="p-2 text-center bg-white">

        <div className='flex justify-center items-center gap-4'>
          <button data-tooltip-id="my-tooltip-1" className="bg-[#FBE38F] text-[#7E7900] font-medium py-2 px-2 mt-1 rounded-full" ><RiEdit2Line /></button>


          <button onClick={() => openModal(users.id)} data-tooltip-id="my-tooltip-2" className="bg-[#FBDDD8] text-[#E85036] font-medium py-2 px-2 mt-1 rounded-full"><RiDeleteBin5Line /></button>


          <button data-tooltip-id="my-tooltip-3" className="bg-[#D7F4F5] text-[#43CCCF] font-medium py-2 px-2 mt-1 rounded-full"><RiArrowDownSLine /></button>
        </div>


        <ReactTooltip
          id="my-tooltip-1"
          place="top"
          style={{ backgroundColor: "#02004A", color: "#fff", padding: "5px", }}
          content="Editar"
        />

        <ReactTooltip
          id="my-tooltip-2"
          place="top"
          style={{ backgroundColor: "#02004A", color: "#fff", padding: "5px", }}
          content="Borrar"
        />

        <ReactTooltip
          id="my-tooltip-3"
          place="top"
          style={{ backgroundColor: "#02004A", color: "#fff", padding: "5px", }}
          content="Ver mas?"
        />

      </td>
    </tr>
  )
}
