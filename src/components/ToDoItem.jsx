import {useState} from "react";
import DeleteButton from './DeleteButton';
import DoneTickBox from './DoneTickBox';
import EditButton from "./EditButton";
 
 const ToDoItem = ({index, taskItem, tasks, setTasks}) => {
    const [changeText, setChangeText] = useState("");
    const [editingState, setEditingState] = useState(false);

    const handleSave = (e) => {
      e.preventDefault(); 
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskItem.id) {
          return { ...task, text: changeText };
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditingState(false);
    };


    return( 
    <div id={taskItem.id}> 
      {editingState ? (
      <form onSubmit={handleSave}> 
         <input value={changeText} type="text" onChange={(e)=>setChangeText(e.target.value)} /> 
         <button type="submit">Save</button> 
      </form>) :  
      <li 
      key={taskItem.id}>{taskItem.text}
      <DoneTickBox  />
      <EditButton editingState={editingState} setEditingState={setEditingState} />
      <DeleteButton taskItem={taskItem} tasks={tasks} setTasks={setTasks} />
      </li>}

    
    </div>
    )
 }

 export default ToDoItem