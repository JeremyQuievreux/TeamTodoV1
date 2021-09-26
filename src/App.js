import { useState } from 'react';
import './App.css';
import Formulaire from './Formulaire/Formulaire';
import Header from './Header/Header';
import TasksList from './TasksList/TasksList';



function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Formulaire setTasks={setTasks} tasks={tasks}/>
      <TasksList tasks={tasks} setTasks={setTasks}/>
      
    </div>
  );
}

export default App;
