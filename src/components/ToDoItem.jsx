import {useState} from "react";
import DeleteButton from './DeleteButton';
import DoneTickBox from './DoneTickBox';
import EditButton from "./EditButton";
 
 const ToDoItem = ({index, taskItem}) => {
   const [changeText, setChangeText] = useState("");
    const [editingState, setEditingState] = useState(false);


    return( 
    <div> 
      {editingState ? (
      <form> 
         <input value={changeText} type="text" /> 
         <button type="button">Save</button> 
      </form>) :  <li key={index}>{taskItem.text}</li>}
    <li key={index}>{taskItem.text}</li>
    <DoneTickBox />
    <EditButton />
    <DeleteButton />
    </div>
    )
 }

 export default ToDoItem