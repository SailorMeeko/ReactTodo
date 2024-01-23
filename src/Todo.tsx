import React, { useState } from "react"
import styles from "./Todo.module.css"

type TodoProps = {
    todo: string
}

export function Todo( { todo }: TodoProps) {

    const [isComplete, setIsComplete] = useState<boolean>(false)

    return (
        <>
            <li className={ isComplete ? styles.complete : styles.incomplete }>{todo} <button hidden={ isComplete } onClick={(e) => setIsComplete(true)} >Complete</button></li>
        </>
    )
}
