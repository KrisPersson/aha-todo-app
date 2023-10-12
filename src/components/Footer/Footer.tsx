import "./Footer.scss"
import * as React from 'react';
import { useRef } from "react"

export default function Footer({ handleAddTodo }: { handleAddTodo: (task: string) => void }) {

    const ref = useRef<HTMLInputElement | null>(null)
    console.log()
    return (
        <footer>
            <input type="text" placeholder="Add a new task" ref={ref} />
            <button onClick={() => handleAddTodo(ref.current?.value || '')}><img src="add.svg" alt="add" /></button>
        </footer>
    )
}
