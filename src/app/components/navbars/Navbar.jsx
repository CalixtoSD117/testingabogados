import { logo } from '../../assets'
import Image from 'next/image'
import { RiMenuFill } from 'react-icons/ri'


export const Navbar = ({handleopenmenu}) => {
  return (
    <header className='bg-white h-[55px] w-full p-2 lg:w-[calc(100%-220px)] lg:ml-[220px] fixed flex items-center justify-between border-slate-700 border-b-[1px] z-40' >
        <h1 className='text-2xl lg:text-4xl font-medium titlee'>Espinoza Asesores</h1>
        <Image src={logo} alt="Logo" className='h-12 object-cover w-32 rounded-md hidden md:block ' priority={false} />
        <div className='lg:hidden'>
          <button onClick={handleopenmenu} className='px-1 py-1 rounded-lg bg-[#2D0002]'> <RiMenuFill className='text-2xl text-white'/> </button>
        </div>
    </header>
  )
}
