import { useEffect} from 'react';
import './Task.scss';

function Task({task, setTasks, tasks}) {
    

    function handleRemove() {
        const result = tasks.filter(currenttask => currenttask.id !== task.id);
        setTasks(result);
    }
    
    function setClass(valeurType){
        switch (valeurType) {
            case "user1":
                return "user1";
            case "user2":
                return "user2";
            case "user3":
                return "user3";
            case "user4":
                return "user4";
            default :
            break
        }
    }    

    useEffect(() => {
        console.log(tasks);
    },[tasks])
    
    return(
        <div className={"task " + setClass(task.type)}>
            <p>{task.task}</p>
            <button className="close-btn" onClick={handleRemove}>X</button>
        </div>
    )
}

export default Task;