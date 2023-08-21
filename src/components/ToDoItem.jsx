import {useState} from "react";
import DeleteButton from './DeleteButton';
import DoneTickBox from './DoneTickBox';
import EditButton from "./EditButton";
 
 const ToDoItem = ({index, taskItem, tasks, setTasks}) => {
   const [changeText, setChangeText] = useState("");
    const [editingState, setEditingState] = useState(false);

   


    return( 
    <div id={taskItem.id}> 
      {editingState ? (
      <form> 
         <input value={changeText} type="text" /> 
         <button type="button">Save</button> 
      </form>) :  
      <li 
      key={taskItem.id}>{taskItem.text}
      <DoneTickBox  />
      <EditButton />
      <DeleteButton taskItem={taskItem} tasks={tasks} setTasks={setTasks} />
      </li>}

    
    </div>
    )
 }

 export default ToDoItem