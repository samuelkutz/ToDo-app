import React from "react";
import * as styles from "./task.styles"
import { TrashSimple } from "@phosphor-icons/react"

const Task = () => {
    return (
        <styles.StyleTask className="content"> 
            <div  className="task">
                <button className="checkContainer">
                    <div/>
                </button>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <button className="deleteButton">
                <TrashSimple size={25} weight="duotone" />
            </button>
       </styles.StyleTask>
    )
}

export default Task