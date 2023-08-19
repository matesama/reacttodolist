import {useState, useEffect} from "react";

const EditButton = () => {
    const [changeText, setChangeText] = useState("");
    const [editingState, setEditingState] = useState(false);
    
    const handleEditButton = (e) => {
        const listItem = e.target.parentNode;
        let listItemText = listItem.firstChild;
        console.log(listItemText);
            


        

        //listItemText.addEventListener('click',(e) => setChangeText(e.target.value));
        console.log(changeText);
       //listItemText.contentEditable = true;
        listItemText.style.backgroundColor = "#dddbdb";
    }
    
    
    
    return <button type="button" className="editButton" onClick= {handleEditButton}>Edit</button>;
}

export default EditButton;