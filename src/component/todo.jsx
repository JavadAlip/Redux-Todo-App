import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

const Todo = () => {
    const dispatch=useDispatch()
    const [newTodoText, setNewTodoText]=useState("");
    const handleAddTodo =(text)=>{

    }
    const handleAddTodoClick =()=>{
        if(newTodoText.trim()!==""){

        }
    }

  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h1 className='mt-3 mb-6 text-2xl font-bold text-center'>REDUX TODO APP</h1>
      
      <div className='items-center flex mb-4'>
        <input value={newTodoText} onChange={(e)=> setNewTodoText(e.target.value)} type="text" name='text' id='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black' />
        <button className='ml-4 p-2 bg-black text-white rounded cursor-pointer' onClick={handleAddTodoClick}><BiPlus/></button>
      </div>
    </div>
  );
}

export default Todo;
