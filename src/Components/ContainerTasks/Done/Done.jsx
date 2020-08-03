import React from 'react';
import { getAllMatchesTasks } from '../../Menu/LocalStorageCRUD'
import { STATUS_DONE } from '../../../constants'
import CardTask from '../CardTask/CardTask'
import 'bootstrap/dist/css/bootstrap.min.css';

function DoneList() {

  const doneTasks = getAllMatchesTasks({ status: STATUS_DONE })

  return (
    <>
      <div className='row col-6 bg-light py-1 mt-4 mr-2 titleTask' >
        <h1 className='lead'> DONE</h1>
      </div>
      <div className="container mt-4">
        <div className='row'>
          {
            doneTasks.length > 0 && doneTasks.map(task => (
              <div key={task.title} className='col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3'>
                <CardTask task={task} />
              </div>

            ))
          }
        </div>
      </div>
      {
        doneTasks.length === 0 && (
          <div className="alert alert-warning mt-4" role="alert">
            <b>DONE </b> section is empty!
          </div>
        )
      }


    </>
  );
}

export default DoneList;

