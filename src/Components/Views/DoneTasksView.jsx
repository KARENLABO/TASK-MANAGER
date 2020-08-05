import React from 'react';
import './DoneTaskView.css'
import DoneList from '../ContainerTasks/Done/Done'
import OptionNavBarComponents from './OptionNavbarComponents'
import 'bootstrap/dist/css/bootstrap.min.css';


function DoneTaskView() {
  return (
    <>
      <OptionNavBarComponents />
      <div className='col-12 DoneViewcontainer'>
        <div className='row '>
          <DoneList />
        </div>
      </div>

    </>
  );
}

export default DoneTaskView;


