import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, markAllcompleted } from '../redux/actions';

const FilterBtn = () => {
    const dispatch= useDispatch();
    const currentFilter = useSelector((state)=> state.filter)
    const handleFilter =(filter)=>{
        dispatch(filterTodos(filter))
    }
  return (
    <div className='flex space-x-4 items-center'>
        <select 
        value={currentFilter}
        onChange={(e)=>handleFilter(e.target.value)}
        className='text-sm px-2 py-1 rounded border-black bg-white  focus:outline-none'>
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
        </select>
        <button onClick={()=> dispatch(markAllcompleted())} className='text-sm px-2 py-1 bg-black text-white ml-2 rounded'>All Completed</button>
    </div>
  )
}

export default FilterBtn