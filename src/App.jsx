import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setTasks([...tasks, task]); 
    setTask("");
  };

  return (
    <div className="Home">
      <h1>TodoReact</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onSubmit={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="list">
        {tasks.map((taskItem, index) => (
          <div key={index}>{taskItem}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
