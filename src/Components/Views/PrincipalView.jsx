import React from 'react';
import './PrincipalView.css'
import ToDoList from '../ContainerTasks/ToDo/ToDo'
import DoneList from '../ContainerTasks/Done/Done'
import 'bootstrap/dist/css/bootstrap.min.css';


function PrincipalView() {
  return (
    <>
      <div className='row containerTask'>
        <div className='col-12'>
          <ToDoList />
        </div>
        <div className='col-12'>
          <DoneList />
        </div>
      </div>

    </>
  );
}

export default PrincipalView;

