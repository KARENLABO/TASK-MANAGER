import React from 'react';
import { TasksContextProvider } from './Components/Context/ContextTasks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu/Menu'
import NavBar from './Components/NavBar/NavBar'
import ToDoTasks from './Components/Views/TodoTasksView'
import DoneTasks from './Components/Views/DoneTasksView'
import PrincipalView from './Components/Views/PrincipalView'


function App() {
  return (
    <>
      <Router>
        <TasksContextProvider>
          <div className='container-fluid bg-white RootContainer'>
            <div className='row  principalrow'>
              <div className='col-3 mr-0 p-0 fixed-top menuP '>
                <Menu />
              </div>
              <div className='col-9 containerNavAndTask'>
                <div className='row fixed-top navs '>
                  <NavBar />
                </div>
              </div>


              <Switch>
                <Route exact path='/' component={PrincipalView} />
                <Route exact path='/DashBoard' component={PrincipalView} />
                <Route exact path='/ToDoTasks' component={ToDoTasks} />
                <Route exact path='/DoneTasks' component={DoneTasks} />
              </Switch>
            </div>
          </div>
        </TasksContextProvider>
      </Router >
    </>
  );
}

export default App;



