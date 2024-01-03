
import { Administrativo } from '../estados/Administrativo'
import { Civil } from '../estados/Civil'
import { Familiar } from '../estados/Familiar'
import { Laboral } from '../estados/Laboral'
import TodoListItem from './TodoListItem'


const TodoList = () => {
  return (
    <div className='bg-white w-full rounded-lg'>
        <div className='border-b pl-4 p-2 text-[20px] font-medium'>
            To-Do
        </div>
        <div className='overflow-x-auto lg:overflow-hidden p-1 lg:overflow-y-hidden hover:overflow-y-auto h-52 ediscroll'>
            <table className='w-full'>
                <thead className='border-b '>
                    <tr>
                        <th className='p-3 text-start text-[16px]' >Caso</th>
                        <th className='p-3 text-start text-[16px]' >Fecha de creación</th>
                        <th className='p-3 text-start text-[16px]' >Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <TodoListItem cases="Caso de despido" date="12/12/2020" state={<Administrativo/>}/>
                    <TodoListItem cases="Caso de despido" date="12/12/2020" state={<Civil/>}/>
                    <TodoListItem cases="Caso de despido" date="12/12/2020" state={<Familiar/>}/>
                    <TodoListItem cases="Caso de despido" date="12/12/2020" state={<Laboral/>}/>              
             
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TodoList