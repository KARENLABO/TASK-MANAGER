import React from 'react';
import './TodoTaskView.css'
import DoneList from '../ContainerTasks/Done/Done'
import 'bootstrap/dist/css/bootstrap.min.css';


function DoneTaskView() {
  return (
    <>
      <div className='col-12 TodoViewcontainer'>
        <div className='row '>
          <DoneList />
        </div>
      </div>

    </>
  );
}

export default DoneTaskView;


