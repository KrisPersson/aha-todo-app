import "./Footer.scss"
import { useRef } from "react"

export default function Footer({ handleAddTodo }: { handleAddTodo: (event: EventTarget) => void }) {

    const refValue = useRef<string>('')
    console.log()
    return (
        <footer>
            <input type="text" placeholder="Add a new task" ref={refValue} />
            <button onClick={() => handleAddTodo(refValue.current?.value)}><img src="add.svg" alt="add" /></button>
        </footer>
    )
}
