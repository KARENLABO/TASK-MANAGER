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
          <div className="card" style="width: 18rem;" key={task.title}>
            <div className="card-body">
              <h5 className="card-title">task.title</h5>
              <p className="card-text">task.description</p>
              <button className='btn'>
                <span>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))
      }
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

