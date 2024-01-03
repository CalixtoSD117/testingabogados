'use client'
import { Navbar } from '../components/navbars/Navbar'
import { Sidebar } from '../components/navbars/Sidebar'
import { ListLayout } from '../layouts/ListLayout'
import { RiTeamLine } from 'react-icons/ri'
import { useState } from 'react'
import { SidebarPhone } from '../components/navbars/SidebarPhone'
import { ListUserv3 } from '../components/lists/ListUserv3'
import { EditInformationDoc } from '../components/Modals/EditInformationDoc'

const Page = () =>
{

    const [openmenu, setopenmenu] = useState(false)

    const handleopenmenu = () =>
    {
        setopenmenu(!openmenu)
    }

    const [openmodaledit, setopenmodaledit] = useState(false)

    const handleopenedit = () =>{
        setopenmodaledit(!openmodaledit)
    }

    const handlecloseedit = () =>{
        setopenmodaledit(!openmodaledit)
    }

    return (
        <>
            
            <SidebarPhone openmenu={openmenu} />
            <Navbar handleopenmenu={handleopenmenu} />
            <Sidebar />
            { openmodaledit ? <EditInformationDoc handlecloseedit={handlecloseedit} /> : null }
            <div>
                <div className="lg:ml-[220px] pt-[80px] p-4 md:p-16 bg-slate-100 min-h-screen">

                    <div className='animate__animated animate__fadeInLeft'>
                        <ListLayout title="Familiar" link="familiaraddpage" icon={<RiTeamLine />} >
                            <ListUserv3 handleopenedit={handleopenedit}/>
                        </ListLayout>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page