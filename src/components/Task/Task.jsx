import React from "react";
import * as styles from "./task.styles"
import { TrashSimple } from "@phosphor-icons/react"

const Task = ({ task }) => {
    return (
        <styles.StyleTask className="content"> 
            <div  className="task">
                <button className="checkContainer">
                    <div/>
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