import React from "react";
import * as styles from "./header.styles";
import { CalendarCheck   } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react";


const Header = ({ onAddTask }) => {
  const [title, setTitle] = React.useState('')

  function handleSubmit(event){
    event.preventDefault()
    
    onAddTask(title)
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  return (
  <styles.StyleHeader className="content">
    <h1 className="title"> My ToDoers </h1>
    <CalendarCheck   className='logo' size={128} color="#c4c4c4" weight="duotone" />

    <form onSubmit={handleSubmit} className="newTaskForm">
      <input placeholder="Add your new task" type="text" value={title} onChange={onChangeTitle}/>
      <button> 
        <Plus size={25} />  
      </button>
    </form>
  </styles.StyleHeader>
  )
};

export default Header;
