import Link from 'next/link'
import React from 'react'
import { RiArrowDropUpLine } from 'react-icons/ri'

export const LinkButtonCustom = ({icon,name,link}) =>
{
    return (
        <Link href={link} className="flex justify-between transition-all pl-2 p-1 pr-2  items-center duration-500 ease-in-out w-full">
            <div className="w-full flex items-center gap-2">
                <span className='className="text-slate-800" '>{icon}</span>
                <span className="">{name}</span>
            </div>
            <RiArrowDropUpLine className="text-[42px] rotate-90" />
        </Link>
    )
}