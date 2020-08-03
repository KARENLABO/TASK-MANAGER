import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllMatchesTasks } from '../../Menu/LocalStorageCRUD'
import { STATUS_DONE } from '../../../constants'

function DoneList() {

  const doneTasks = getAllMatchesTasks({ status: STATUS_DONE })

  return (
    <>
      <div className='row col-6 bg-light py-1 mt-4 mr-2 titleTask' >
        <h1 className='lead'> DONE</h1>
      </div>

      {
        doneTasks.length > 0 && doneTasks.map(task => (
          <div className='ContainerEveryCard' key={task.title}>
            <h1>{task.description}</h1>
          </div>
        ))
      }
      {
        doneTasks.length === 0 && (<div><h1>The done section is empty!</h1></div>)
      }


    </>
  );
}

export default DoneList;
