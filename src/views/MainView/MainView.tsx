import "./MainView.scss"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import TodoItem from "../../components/TodoItem/TodoItem"
import { useState, useEffect } from "react"
import { Todo } from "../../types/interfaces"
import { getTodoListFromLS, deleteTodo, addTodo, updateTodo } from "../../utils/helpers"


export default function MainView() {

    const [todos, setTodos] = useState<Todo[]>([])

    function updateTodoList() {
        const parsedTodoList = getTodoListFromLS()
        setTodos([...parsedTodoList])
    }
    function handleDeleteTodo(id: string) {
        deleteTodo(id)
        updateTodoList()
    }
    function handleAddTodo(task: string) {
        if (!task) return
        addTodo(task)
        updateTodoList()
    }
    function handleUpdateTodo(id: string) {
        updateTodo(id)
        updateTodoList()
    }

    useEffect(() => {
        updateTodoList()
    }, [])

    return (
        <div className="view view--main">
            <Header />
            
            {
            todos.length > 0 ?
            <ul className='ul-list'>
                { todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id} 
                            id={todo.id}  
                            task={todo.task}
                            done={todo.done}
                            handleDeleteTodo={handleDeleteTodo}
                            handleUpdateTodo={handleUpdateTodo}
                        />
                    )
                }) }
            </ul>
            : <p className='no-todos-p'>You have nothing to do!</p>
            }
                
            <Footer handleAddTodo={handleAddTodo} />
        </div>
    )
}
