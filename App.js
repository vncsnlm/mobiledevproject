import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm'; 

function App() {
  
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <div>
      {}
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
