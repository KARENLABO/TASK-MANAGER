import React from 'react';
import { getAllMatchesTasks } from '../../Menu/LocalStorageCRUD'
import { STATUS_DONE } from '../../../constants'
import CardTask from '../CardTask/CardTask'
import 'bootstrap/dist/css/bootstrap.min.css';

function DoneList() {

  const doneTasks = getAllMatchesTasks({ status: STATUS_DONE })

  return (
    <>
      <div className='row col-6 bg-light py-1 mt-4 ml-1 mr-2 titleTask pl-0 ' >
        <h1 className='lead '> DONE</h1>
      </div>
      <div className="container mt-4  ">
        <div className='row '>
          {
            doneTasks.length > 0 && doneTasks.map(task => (
              <div key={task.title} className='col-sm-8 col-md-6 col-lg-6 col-xl-6 mt-3 '>
                <CardTask task={task} />
              </div>

            ))
          }
        </div>
      </div>
      <div className="container-fluid mt-4 hola">
        {
          doneTasks.length === 0 && (
            <div className="alert alert-warning " role="alert">
              <b>DONE </b> section is empty!
            </div>
          )
        }
      </div>


    </>
  );
}

export default DoneList;

