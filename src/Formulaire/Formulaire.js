import { useEffect, useState } from 'react';
import './Formulaire.scss';

function Formulaire({tasks, setTasks}) {

    const [task, setTask] = useState();
    const [user, setUser] = useState("Team Member 1");
    const [taskId, setTaskId] = useState(0);

    function handleInput(e) {
        setTask(e.target.value);
    }
    function handleChange(e) {
        setUser(e.target.value);
    }
    function handleClick() {
        setTaskId(taskId + 1);
        setTasks([...tasks,{
            id : taskId,
            task : task,
            user : user,
            done : false
        }]);
        document.getElementById("task").value = "";
        document.getElementById("task-user").value ="Team Member 1";
        setUser("Team Member 1");
        setTask("");
        
    }

    useEffect(() => {
        localStorage.setItem("TeamTodo", JSON.stringify(tasks));
    },[tasks]);

    function handleReset() {
        let response = prompt("Voulez vous vraiment supprimer toute vous taches ?\n \"OUI\" ou \"NON\"");
          checkResponse(response);    
    }
    function checkResponse(response){
        if (response === "OUI") {
            localStorage.removeItem("TeamTodo");
            setTasks([]);
        } else if (response === "NON") {
        } else {
            handleReset();
        }
    }


    return(
        <div className="form-container">
            <div className="form">
                <input onChange={handleInput} type="text" name="task" id="task" placeholder="What do you want to remember ?" />
                <select onChange={handleChange} name="task-user" id="task-user">
                    <option value="Team Member 1">Team Member 1</option>
                    <option value="Team Member 2">Team Member 2</option>
                    <option value="Team Member 3">Team Member 3</option>
                    <option value="Team Member 4">Team Member 4</option>
                </select>
                <button id="add-btn" onClick={handleClick} >Remember that !</button>
                <button id="reset-btn" onClick={handleReset}>Reset Data</button>
            </div>
        </div>
    )
}

export default Formulaire;