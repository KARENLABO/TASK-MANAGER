import React from 'react';
import './PrincipalView.css'
import ToDoList from '../ContainerTasks/ToDo/ToDo'
import OptionNavBarComponents from './OptionNavbarComponents'
import './TodoTaskView.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoList() {
  return (
    <>
      <OptionNavBarComponents />
      <div className='col-12 TodoViewcontainer'>
        <div className='row '>
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default TodoList;
