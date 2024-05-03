import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchFilter = (filter === "COMPLETED" && todo.completed) || 
                         (filter === "INCOMPLETE" && !todo.completed) || 
                         (filter === "ALL");
      // Check if todo.text is a string before calling toLowerCase()
      const matchSearch =
        typeof todo.text === 'string' && 
        todo.text.toLowerCase().includes(searchTerm);
      return matchFilter && matchSearch
    })
  })

  console.log("hello guys", filteredTodos);
  
  return (
    <ul>
      <li className='my-2 text-sm italic'>All Notes</li>
      {
        filteredTodos.map((todo,index)=>{
         return <li className='font-bold' key={index}>{todo.text}</li>
        })
      }
    </ul>
  )
}

export default List
