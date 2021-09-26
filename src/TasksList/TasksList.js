import Task from '../Task/Task';
import './TasksList.scss';

function TasksList({tasks, setTasks}) {

    
    return(
        <div className="tasks-list">
            {tasks.map((task) => {
                return(<Task task={task} setTasks={setTasks} tasks={tasks} key={task.id}/>);
            })}
        </div>
    )
}

export default TasksList ;