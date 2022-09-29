import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoCompleted} from "../store/todoSlice";


const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();
    const deleteTodo = () => {
        dispatch(removeTodo({id}))
    }
    const toggleTodo = () => {
        dispatch(toggleTodoCompleted({id}))
    }
    return (
        <li  key={id}>
            <input type="checkbox" checked={completed} onChange={toggleTodo}/>
            <span>{text}</span>
            <span className="delete" onClick={deleteTodo}>&times;</span>
        </li>
    );
};

export default TodoItem;