import React from "react";
import * as styles from "./task.styles"
import { TrashSimple } from "@phosphor-icons/react"
import { Check } from "@phosphor-icons/react"

const Task = ({ task, onComplete, onDelete }) => {
    return (
        <styles.StyleTask className="content"> 
            <div className="task">
                <button className="checkContainer" onClick={() => {onComplete(task.id)}}>
                    {task.isCompleted ? <div><Check size={64} weight="bold"/></div> : <div/>}
                </button>
            </div>

            <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>
 
            <button className="deleteButton">
                <TrashSimple size={25} weight="duotone" onClick={() => onDelete(task.id)}/>
            </button>
       </styles.StyleTask>
    )
}

export default Task