import { Todo } from "../types/interfaces"
import { nanoid } from 'nanoid'

export function getTodoListFromLS() {
    let todoList = localStorage.getItem('todo-list')
    if (!todoList) {
        localStorage.setItem('todo-list', JSON.stringify([]))
        todoList = localStorage.getItem('todo-list')
    }
    return JSON.parse(todoList as string) as Todo[]
}

export function deleteTodo(id: string) {
    const todoList = getTodoListFromLS()
    const idExists = todoList.find(todo => todo.id === id)
    if (!idExists) return
    const newList = todoList.filter(todo => todo.id !== id)
    localStorage.setItem('todo-list', JSON.stringify([...newList]))
}

export function addTodo(task: string) {
    const todoList = getTodoListFromLS()
    console.log(todoList)
    const newTodo = {
        id: nanoid(),
        task,
        done: false
    }
    todoList.push({...newTodo})
    localStorage.setItem('todo-list', JSON.stringify([...todoList]))
}

export function updateTodo(id: string) {
    const todoList = getTodoListFromLS()
    const idExists = todoList.find(todo => todo.id === id)
    if (!idExists) return
    const newList = todoList.map(todo => {
        if (todo.id !== id) {
            return {...todo}
        } else {
            return {...todo, done: !todo.done}
        }
    })
    localStorage.setItem('todo-list', JSON.stringify([...newList]))
}
