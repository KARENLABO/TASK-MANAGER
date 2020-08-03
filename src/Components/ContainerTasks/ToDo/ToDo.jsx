import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllMatchesTasks } from '../../Menu/LocalStorageCRUD'
import { STATUS_TO_DO } from '../../../constants'

function ToDoList() {

  const toDoTasks = getAllMatchesTasks({ status: STATUS_TO_DO })

  return (
    <>

      <div className='row col-6 bg-light py-1 mt-4 mr-2 titleTask' >
        <h1 className='lead'> TO DO</h1>
      </div>

      {
        toDoTasks.length > 0 && toDoTasks.map(task => (
          <div className='ContainerEveryCard' key={task.title}>
            <h1>{task.description}</h1>
          </div>
        ))
      }
      {
        toDoTasks.length === 0 && (<div><h1>The to do section is empty!</h1></div>)
      }
    </>
  );
}

export default ToDoList;
