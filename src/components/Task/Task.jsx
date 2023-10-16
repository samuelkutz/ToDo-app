import React from "react";
import * as styles from "./task.styles"
import { TrashSimple } from "@phosphor-icons/react"
import { CheckCircle } from "@phosphor-icons/react"

const Task = ({ task, onComplete }) => {
    return (
        <styles.StyleTask className="content"> 
            <div className="task">
                <button className="checkContainer" onClick={() => onComplete(task.id)}>
                    {task.isCompleted ? <CheckCircle size={25} color="#616161" /> : <CheckCircle size={25} color="#d6d6d6" />}
                </button>
            </div>

            <p>{task.title}</p>
 
            <button className="deleteButton">
                <TrashSimple size={25} weight="duotone" />
            </button>
       </styles.StyleTask>
    )
}

export default Task