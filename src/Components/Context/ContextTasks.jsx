
import React, { createContext, useState } from 'react'

//initializing create context Hook
export const TasksContext = createContext();

//this is the function that contains the information that will be used in the others components.
export const TasksContextProvider = ({ children }) => {
  //  we created the states Here.
  const [show, setShow] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  return (
    //  we export the states here.
    <TasksContext.Provider value={{ show, setShow, allTasks, setAllTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
