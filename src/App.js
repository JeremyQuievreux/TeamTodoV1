import { useState } from 'react';
import './App.css';
import Formulaire from './Formulaire/Formulaire';
import Header from './Header/Header';
import TasksList from './TasksList/TasksList';



function App() {

  let localTeamTodo = localStorage.getItem("TeamTodo");

  function checkLocalTodo() {
    if (localTeamTodo) {
      let parseTeamTodo = JSON.parse(localTeamTodo);
      return parseTeamTodo;
    } else {
      return ([]);
    }
  }

  const [tasks, setTasks] = useState(checkLocalTodo());

  return (
    <div className="App">
      <Header/>
      <Formulaire setTasks={setTasks} tasks={tasks}/>
      <TasksList tasks={tasks} setTasks={setTasks}/>
      
    </div>
  );
}

export default App;
