import React, { useContext } from 'react';
import './Menu.css'
import { TasksContext } from '../Context/ContextTasks'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalNewTask from './Modal/ModalNewTask'


function Menu() {
  // we import the statates that we are going to use from context
  const { setShow } = useContext(TasksContext);
  const history = useHistory()


  const AbrirModal = () => {
    setShow(true)
  }

  return (
    <>
      <div className=" container-fluid  ">
        <div className='row text-center shadow-lg p-3  bg-trasparent rounded containermenu '>

          <div className='col-12'>
            <div className='row containerMenuIcon'>
              <div id='IconMenu' className=' text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <div className=' p-0'>
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-list p-0 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
              </div>
              <div id='IconMenu' className=' col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <div className="d-none d-md-block text-white mt-2 text-left "><b>MENU</b></div>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <div onClick={AbrirModal} className='row containerNewTaskIcon'>
              <div id='IconNewTask' className=' text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <button className='btn text-dark p-0 ' type="button" data-toggle="modal" data-target="#staticBackdrop">
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-plus-square-fill text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                  </svg>
                </button>
              </div>
              <div id='IconNewTask' className=' col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <div className="d-none d-md-block text-white mt-2 text-left "><b>NEW TASK</b></div>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <div onClick={() => history.push('/DashBoard')} className='row  containerDashBoardIcon'>
              <div id='IconDashBoard' className=' text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <button className='btn text-dark p-0'>
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-grid-3x3-gap-fill text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                  </svg>
                </button>
              </div>
              <div id='IconDashBoard' className=' col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <div className="d-none d-md-block text-white mt-2 text-left "><b>DASHBOARD</b></div>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <div onClick={() => history.push('/ToDoTasks')} className='row containerToDoIcon'>
              <div id='IconToDo' className=' text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <button className='btn text-dark p-0'>
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-list-check text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                  </svg>
                </button>
              </div>
              <div id='IconToDo' className=' col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <div className="d-none d-md-block text-white mt-2 text-left "><b>TO DO</b></div>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <div onClick={() => history.push('/DoneTasks')} className='row containerDoneIcon'>
              <div id='IconDone' className=' text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <button className='btn text-dark p-0'>
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-check2-square text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    <path fillRule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z" />
                  </svg>
                </button>
              </div>
              <div id='IconDone' className=' col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0'>
                <div className="d-none d-md-block text-white mt-2 text-left "><b>DONE</b></div>
              </div>
            </div>
          </div>

        </div>

        <ModalNewTask />

      </div>
    </>
  );
}

export default Menu;
