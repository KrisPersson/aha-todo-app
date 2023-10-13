import "./TodoItem.scss"
import * as React from 'react';

export default function TodoItem({
    id,
    task,
    done,
    handleDeleteTodo,
    handleUpdateTodo
} : {
    id: string,
    task: string,
    done: boolean,
    handleDeleteTodo: (id: string) => void,
    handleUpdateTodo: (id: string) => void
}) {

    return (
        <li id={id} className={ done ? 'todo-item todo-item--done' : 'todo-item' }>
            <input 
                onChange={() => handleUpdateTodo(id)} 
                type="checkbox" 
                defaultChecked={done} 
            />
            <span>{ task }</span>
            <button onClick={() => handleDeleteTodo(id)}>
                <img src="remove.svg" alt="Delete todo" />
            </button>
        </li>
    )
}