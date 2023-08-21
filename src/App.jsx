import { useState, useEffect } from 'react';
import './App.css';
import ToDoItems from "./components/ToDoItem";


function App() {
  //const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    //get ID
    let randomId = Math.random() * 100000;
    const taskItem = {id: randomId,
                      text: task};
    setTasks([...tasks, taskItem]); 
    setTask("");
  };

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

  if(savedTasks) {
    return JSON.parse(savedTasks);
  } else {
      return [];
  }

  }) 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 

  return (
    <div className="Home">
      <h1>TodoReact</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul className="list">
        {tasks.map((taskItem, index) => (
          <ToDoItems key={index}  taskItem={taskItem} tasks={tasks} setTasks={setTasks}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
