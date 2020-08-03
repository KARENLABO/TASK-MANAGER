import React from 'react';
import NavBar from '../NavBar/NavBar'
import Menu from '../Menu/Menu'
import './PrincipalView.css'
import ToDoList from '../ContainerTasks/ToDo/ToDo'
import DoneList from '../ContainerTasks/Done/Done'
import 'bootstrap/dist/css/bootstrap.min.css';


function PrincipalView() {
  return (
    <>
      <div className='container-fluid bg-white RootContainer'>
        <div className='row  principalrow'>
          <div className='col-3 mr-0 fixed-top '>
            <Menu />
          </div>
          <div className='col-9 containerNavAndTask'>
            <div className='row fixed-top navs'>
              <NavBar />
            </div>
            <div className='row containerTask'>
              <ToDoList />
              <DoneList />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipalView;


