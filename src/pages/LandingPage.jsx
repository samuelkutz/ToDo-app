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
        task.isCompleted = !task.isCompleted

        return task
      }

      return task
    })

    setTasks(newTasks)
  }

  function deleteTaskById(taskID) {
    const newTasks = tasks.filter(task => task.id != taskID)

    setTasks(newTasks)
  }
  return (
    <div className="container">
        <Header onAddTask={addTask}/>
        <Tasks 
            tasks={tasks}
            onComplete={toggleTaskCompletedbyId}
            onDelete={deleteTaskById}
        />
    </div>
  )
}

export default LandingPage