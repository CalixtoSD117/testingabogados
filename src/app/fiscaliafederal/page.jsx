'use client'
import { Navbar } from '../components/navbars/Navbar'
import { Sidebar} from '../components/navbars/Sidebar'
import { ListLayout } from '../layouts/ListLayout'
import { RiTeamLine } from 'react-icons/ri'
import { useState } from 'react'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import { ListUserv3 } from '../components/lists/ListUserv3'

const Page = () =>
{

    const [openmenu, setopenmenu] = useState(false)

    const handleopenmenu = () =>
    {
        setopenmenu(!openmenu)
    }

    return (
        <div>
            <SidebarPhone openmenu={openmenu} />
            <Navbar handleopenmenu={handleopenmenu} />
            <Sidebar />
            <div className="lg:ml-[220px] pt-[80px] md:p-16 min-h-screen bg-slate-100">

                <div className='animate__animated animate__fadeInLeft'>
                    <ListLayout title="Fiscalia Federal" link="fiscaliaaddfederal" icon={<RiTeamLine />} >
                        <ListUserv3 />
                    </ListLayout>
                </div>

            </div>
        </div>
    )
}

export default Page