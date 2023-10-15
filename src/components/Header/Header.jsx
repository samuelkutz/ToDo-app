import React from "react";
import * as styles from "./header.styles";
import { CalendarCheck   } from "@phosphor-icons/react";


const Header = ({handleAddTask}) => {
  return (
  <styles.StyleHeader className="content">
    <h1 className="title"> My ToDoers </h1>
    <CalendarCheck   className='logo' size={128} color="#c4c4c4" weight="duotone" />

    <form className={"newTaskForm"}>
      <input placeholder="Add your new ToDoer" type="text" />
      <button> Create </button>
    </form>
  </styles.StyleHeader>
  )
};

export default Header;
