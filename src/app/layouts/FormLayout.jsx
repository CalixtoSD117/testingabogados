import React from 'react'

const FormLayout = ({title, icon, children}) => {
  return (
    <div>
        <div className='mt-2  flex  items-center justify-center gap-5 text-3xl'>
            <span>{icon}</span>
            <h1>{title}</h1>
        </div>
        {children}
    </div>
  )
}

export default FormLayout