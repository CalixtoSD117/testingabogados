'use client'
import { RiArrowDownSLine, RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const   ItemListUserv3 = ({handleopenedit}) =>
{
  return (
    <tr className="  text-black font-medium border-b m-0 p-0">
      <td className="p-2 text-center bg-white">152</td>
      <td className="p-2 text-center bg-white ">carlos</td>
      <td className="p-2 text-center bg-white  ">Mercantil</td>
      <td className="p-2 text-center bg-white ">
        <span>cliente@ucol.mx</span>
        <br />
        <span>3143387924</span>
      </td>
      <td className="p-2 text-center bg-white  ">12/12/2021</td>
      <td className="p-2 text-center bg-white  ">cambios en la matrix</td>
      <td className="p-2 text-center bg-white">

        <div className='flex justify-center items-center gap-4'>
          <button onClick={handleopenedit} data-tooltip-id="my-tooltip-1" className="bg-[#FBE38F] text-[#7E7900] font-medium py-2 px-2 mt-1 rounded-full" ><RiEdit2Line /></button>


          <button  data-tooltip-id="my-tooltip-2" className="bg-[#FBDDD8] text-[#E85036] font-medium py-2 px-2 mt-1 rounded-full"><RiDeleteBin5Line /></button>


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

export default ItemListUserv3