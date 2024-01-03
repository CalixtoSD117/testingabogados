import React from 'react'

const TodoListItem = ({cases,date,state}) => {
  return (
    <tr className='border-b'>
        <td className='p-3 text-start text-[14px]' >{cases}</td>
        <td className='p-3 text-start text-[14px]' >{date}</td>
        <td className='p-3 text-start text-[14px]' > {state} </td>
    </tr>
  )
}

export default TodoListItem