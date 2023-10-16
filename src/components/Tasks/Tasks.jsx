import React from "react";
import * as styles from "./tasks.styles"
import Task from "../Task/Task";

const Tasks = ({ tasks, onComplete }) => {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length
    return (
        <styles.StyleTasks className="content"> 
            <header className="subheader">
                <div>
                    <p>Created</p>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <p>Completed</p>
                    <span>{completedTasks}/{taskQuantity}</span>
                </div>
            </header>

            <div className="list">
                {tasks.map( task => {
                    return <Task key={task.id} task={task} onComplete={onComplete}/>
                })}
            </div>
        </styles.StyleTasks>
    )
} 

export default Tasks