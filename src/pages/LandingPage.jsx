import React from 'react'
import Header from '../components/Header/Header'
import Tasks from '../components/Tasks/Tasks'
  
const LandingPage = () => {
  const [tasks, setTasks] = React.useState([])

  function addTask(taskTitle){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  return (
    <div className="container">
        <Header onAddTask={addTask}/>
        <Tasks tasks={tasks}/>
    </div>
  )
}

export default LandingPage