import React, { useState } from 'react';
import { BiPlus, BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from "../redux/actions"
import FilterBtn from './FilterBtn';
import List from './List';

const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    }

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddTodo(newTodoText.trim());
            setNewTodoText("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    }

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h1 className='mt-3 mb-6 text-2xl font-bold text-center'>REDUX TODO APP</h1>

            <div className='items-center flex mb-4'>
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name='text' id='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black' />
                <button className='ml-4 p-2 bg-black text-white rounded cursor-pointer' onClick={handleAddTodoClick}><BiPlus /></button>
            </div>

            {/* filter section & search*/}
            <div className='flex items-center justify-between'>
                <FilterBtn />
                <div className='flex items-center mb-4'>
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name='text' id='addTodoInput' placeholder='Search...' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black' />
                    <button className='ml-4 p-2 bg-black text-white rounded cursor-pointer'><BiSearch /></button>
                </div>
            </div>

            {/* todolists */}
            <List />

        </div>
    );
}

export default Todo;
