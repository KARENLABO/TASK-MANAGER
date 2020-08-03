import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cardtask.css'

function CardTask({ task }) {


  return (
    <>
      <div className="card  text-center " >
        <div className="card-header">
          <p className="card-title text-break my-0 font-weight-bolder text-secondary">{task.title}</p>
        </div>
        <div className="card-body">
          <p className="card-title text-break  font-weight-normal text-secondary mb-0">{task.description}</p>

          <div className="badge badge-primary text-wrap botonStoryPoints" >
            {task.storyPoints}
          </div>

          <button className='btn'>
            <span>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-check2-square text-secondary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                <path fillRule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardTask;
