import React, { useState, useEffect } from 'react';
import { update, deleteTask } from './../../Menu/LocalStorageCRUD'
import { STATUS_DONE, STATUS_TO_DO } from './../../../constants'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cardtask.css'

function CardTask({ task }) {
  const [color, setColor] = useState('text-secondary');
  useEffect(() => {
    if (task.status === STATUS_DONE) {
      setColor('text-success');

    } else {
      setColor('text-secondary');
    }
  }, [])

  const changeStatus = () => {
    if (task.status === STATUS_DONE) {
      update(task, { status: STATUS_TO_DO });
      window.location.reload(0);
    }
    if (task.status === STATUS_TO_DO) {
      update(task, { status: STATUS_DONE });
      window.location.reload(0);
    }
  }

  const deleteTaskSelected = () => {
    deleteTask(task);
    window.location.reload(0);
  }

  return (
    <>
      <div className="card  text-center " >

        <div id="titleHeader" className="container card-header p-0">
          <div className="row">
            <div className="col-8 ">
              <p id="itemTaskTitle" className="badge card-title  text-justify text-break my-0 font-weight-bolder text-secondary p-0">
                {task.title}</p>
            </div>
            <div className="col-4 p-0">
              <button id='btnSvgDelete' className='btn p-0' onClick={() => deleteTaskSelected()}>
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-trash text-danger p-0"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" container card-body py-0 ">

          <div className='row' id='rowContainerBodyCard'>
            <div className='col-12 align-baseline'>
              <p className="card-title text-break  text-left font-italic  font-weight-normal text-secondary mb-0">
                {task.description}
              </p>
            </div>

          </div>

          <div className='row mt-3 pb-2' id='rowContainerfooterCard'>

            <div className='col-3 p-0'>
              <div className="badge badge-secondary text-wrap botonStoryPoints" >
                {task.storyPoints}
              </div>
            </div>
            <div className='col-9 p-0 m-0 text-left'>
              <p className='m-0'>Story Points</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-3 p-0'>
              <button id='btnSvg' className='btn p-0' onClick={() => changeStatus()}>
                <span>
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    className={`bi bi-check2-square ${color}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    id={"svgCheck"}>
                    <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    <path fillRule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z" />
                  </svg>
                </span>
              </button>

            </div>
            <div className='col-9 p-0 align-bottom '>
              <p className='m-0 text-left'>
                Mark as done </p>


            </div>

          </div>






        </div>
      </div >
    </>
  );
}

export default CardTask;
