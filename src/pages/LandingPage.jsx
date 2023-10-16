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

  function toggleTaskCompletedbyId(taskID){
    const newTasks = tasks.map(task => {
      if (task.id === taskID) {
        return {
          ...task, 
          ìsCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTasks(newTasks)
  }
  return (
    <div className="container">
        <Header onAddTask={addTask}/>
        <Tasks 
            tasks={tasks}
            onComplete={toggleTaskCompletedbyId}
        />
    </div>
  )
}

export default LandingPage