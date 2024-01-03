import React from 'react'
import LastCaseMakingItem from './LastCaseMakingItem'

const LastCasesMaking = () => {
  return (
    <div className='bg-white w-full rounded-lg'>
        <div className='border-b pl-4 p-2 text-[20px] font-medium'>
            Últimos casos creados
        </div>
        <div className='overflow-x-auto lg:overflow-hidden p-1 lg:overflow-y-hidden hover:overflow-y-auto h-52 ediscroll'>
            <table className='w-full relative'>
                <thead className='border-b '>
                    <tr>
                        <th className='p-3 text-start text-[16px]' >Cliente</th>
                        <th className='p-3 text-start text-[16px]' >Área</th>
                        <th className='p-3 text-start text-[16px]' >F.Apertura</th>
                        <th className='p-3 text-start text-[16px]' >F.Cerrado</th>
                    </tr>
                </thead>
                <tbody>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                    <LastCaseMakingItem/>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LastCasesMaking