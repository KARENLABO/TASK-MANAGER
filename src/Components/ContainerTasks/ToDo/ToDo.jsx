import React from 'react';
import { getAllMatchesTasks } from '../../Menu/LocalStorageCRUD'
import { STATUS_TO_DO } from '../../../constants'
import CardTask from '../CardTask/CardTask'


function ToDoList() {

  const toDoTasks = getAllMatchesTasks({ status: STATUS_TO_DO })

  return (
    <>

      <div className='row col-6 bg-light py-1 mt-4 mr-2 titleTask ' >
        <h1 className='lead'> TO DO</h1>
      </div>
      <div className="container mt-4 m-0 ">
        <div className='row '>
          {
            toDoTasks.length > 0 && toDoTasks.map(task => (
              <div key={task.title} className='col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3 '>
                <CardTask task={task} />
              </div>

            ))
          }
        </div>
      </div>


      {
        toDoTasks.length === 0 && (
          <div className="alert alert-warning " role="alert">
            <b>TO DO</b> section is empty!
          </div>
        )
      }
    </>
  );
}

export default ToDoList;
