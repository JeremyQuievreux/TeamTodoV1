import { useEffect} from 'react';
import './Task.scss';

function Task({task, setTasks, tasks}) {
    

    function handleRemove() {
        const result = tasks.filter(currenttask => currenttask.id !== task.id);
        setTasks(result);
    }
    
    function setClass(valeurType){
        switch (valeurType) {
            case "Team Member 1":
                return "user1";
            case "Team Member 2":
                return "user2";
            case "Team Member 3":
                return "user3";
            case "Team Member 4":
                return "user4";
            default :
            break
        }
    }    

    useEffect(() => {
        console.log(tasks);
    },[tasks])
    
    return(
        <div className={"task " + setClass(task.user)}>
            <p className="user-name">{task.user}</p>
            <p>{task.task}</p>
            <button className="close-btn" onClick={handleRemove}>X</button>
        </div>
    )
}

export default Task;