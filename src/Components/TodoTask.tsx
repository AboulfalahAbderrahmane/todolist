import React from 'react';
import {ITask} from "../interfaces";
interface Props{
    task:ITask
}
function TodoTask({task}:Props) {
    return (
        <div className="todo-task">
            <p>{task.taskName}</p>
        </div>
    )
}
export default TodoTask;