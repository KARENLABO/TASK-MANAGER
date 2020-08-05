import React from 'react';
import './PrincipalView.css';
import OptionNavBarComponents from '../Views/OptionNavbarComponents';
import ToDoList from '../ContainerTasks/ToDo/ToDo';
import DoneList from '../ContainerTasks/Done/Done';
import 'bootstrap/dist/css/bootstrap.min.css';


function PrincipalView() {
  return (
    <>
      <OptionNavBarComponents />
      <div className='row containerTask '>
        <div className='col-12 p-0 mr-5'>
          <ToDoList />
        </div>
        <div className='col-12 p-0 '>
          <DoneList />
        </div>
      </div>

    </>
  );
}

export default PrincipalView;


