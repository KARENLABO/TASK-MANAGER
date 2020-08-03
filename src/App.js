import React from 'react';
import { TasksContextProvider } from './Components/Context/ContextTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrincipalView from './Components/Views/PrincipalView'


function App() {
  return (
    <>
      <TasksContextProvider>
        <PrincipalView />
      </TasksContextProvider>

    </>
  );
}

export default App;



