import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: "ALL",
    searchTerm: ""
}

const todoeducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            // Update localStorage when adding a new todo
            const updatedTodos = [...state.todos, { text: action.payload.text, completed: false }];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                todos: updatedTodos,
                filter: state.filter,
                searchTerm: state.searchTerm
            };

        case TOGGLE_TODO:
            // Update localStorage when toggling a todo
            const toggledTodos = state.todos.map((todo, index) => index === action.payload.id ? { ...todo, completed: !todo.completed } : todo);
            localStorage.setItem('todos', JSON.stringify(toggledTodos));
            return {
                todos: toggledTodos,
                filter: state.filter,
                searchTerm: state.searchTerm
            };

        case REMOVE_TODO:
            // Remove the todo from state and update localStorage
            const updatedTodosAfterRemoval = state.todos.filter((todo, index) => index !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(updatedTodosAfterRemoval));
            return {
                todos: updatedTodosAfterRemoval,
                filter: state.filter,
                searchTerm: state.searchTerm
            };

        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo, index) => index === action.payload.id ? { ...todo, completed: true } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case MARK_INCOMPLETED:
            return {
                todos: state.todos.map((todo, index) => index === action.payload.id ? { ...todo, completed: false } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case FILTER_TODO:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }

        case UPDATE_SEARCH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }

        case MARK_ALL_COMPLETED:
            return {
                todos: state.todos.map((todo) => ({ ...todo, completed: true })),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        default:
            return state;
    }

}
export default todoeducer;