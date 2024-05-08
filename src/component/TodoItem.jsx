import React from 'react'
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { markIncompleted, markcompleted, removetodo, togglrtodo } from '../redux/actions'

const TodoItem = ({ index, todo }) => {
    const dispatch = useDispatch()
  return (
    <li>
      <div className='flex flex-row items-center justify-between border-b-2 py-2'>
        <div className='flex items-center'>
          <span className='mr-4 text-gray-500'>{index + 1}</span>
          <span className={`mr-4 ${todo.completed ? "line-through text-gray-500" : ""}`}>{todo.text}</span>
        </div>
        <div className='ml-auto'>
          <button onClick={()=>dispatch(togglrtodo(index))} className='text-sm bg-white sm:px-2 py-1 px-2 rounded'>{todo.completed ? <FaToggleOff /> : <FaToggleOn />}</button>
          <button onClick={() => dispatch(removetodo(index))} className='text-sm bg-white sm:px-2 py-1 px-2 rounded'><FaTrash/></button>

          
          {
            !todo.completed && (
                <button onClick={()=>dispatch(markcompleted(index))} className='text-sm bg-white sm:px-2 py-1 px-2 rounded'><FaCheck/></button>
            )
          }
          {
            todo.completed && (
                <button onClick={()=>dispatch(markIncompleted(index))} className='text-sm bg-white sm:px-2 py-1 px-2 rounded'><FaTimes/></button>
            )
          }
          
        </div>
      </div>
    </li>
  )
}

export default TodoItem
