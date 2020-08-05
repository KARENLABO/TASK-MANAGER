import React from 'react';
import { TasksContextProvider } from './Components/Context/ContextTasks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoTasks from './Components/Views/TodoTasksView'
import DoneTasks from './Components/Views/DoneTasksView'
import PrincipalView from './Components/Views/PrincipalView'


function App() {
  return (
    <>
      <TasksContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={() => < PrincipalView />} />
            <Route exact path='/DashBoard' component={() => <  PrincipalView />} />
            <Route exact path='/ToDoTasks' component={() => < ToDoTasks />} />
            <Route exact path='/DoneTasks' component={() => <DoneTasks />} />
          </Switch>
        </Router >
      </TasksContextProvider>
    </>
  );
}

export default App;



