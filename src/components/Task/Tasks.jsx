import React from "react";
import * as styles from "./tasks.styles"

const Tasks = () => {
    return (
        <styles.StyleTasks className="content"> 
            <header className="subheader">
                <div>
                    <p>Created</p>
                    <span>10</span>
                </div>

                <div>
                    <p>Completed</p>
                    <span>1/10</span>
                </div>
            </header>

            <div className="list">
                
            </div>
        </styles.StyleTasks>
    )
}

export default Tasks