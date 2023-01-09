import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // changeState = () => {
    //     console.log('Todo: cambiar estado de una tarea')
    // }

    return (
        <div>
            <div>
                <h1>Tus Tareas:</h1> 
            </div>

            {/* TODO:  Aplicar un For/Map para renderizar una lista*/ }
            <TaskComponent task={ defaultTask } ></TaskComponent>
        </div >
    );
};





export default TaskListComponent;
