import { LOCAL_STORAGE_KEY } from '../../constants'
/**
 * This function is to save a single task inside localstorage
 * All the information is being saved with a key named allTasks
 * @param task requested
 */
export const saveTask = (task) => {
  let allTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  // if the localstorage is empty, then create a new array of string and save it.
  if (!allTasks) {
    allTasks = [JSON.stringify(task)];
    localStorage.setItem(LOCAL_STORAGE_KEY, allTasks);
  } else {
    // if not, get all the tasks as an array
    allTasks = [allTasks];
    //save the new element as part of the array of allTasks.
    allTasks.push(JSON.stringify(task));
    localStorage.setItem(LOCAL_STORAGE_KEY, allTasks.toString());
  }
}

/**
 * This function is to get all the task as an sorted array of elements.
 * If there are not elements, will return an empty array.
 * Otherwise, will return a sorted array with all the elements.
 */
export const getTasks = () => {
  let tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  let taskArray = []
  if (!tasks) {
    console.log("there is no elements");
  } else {
    // instead of split by }, for every match of that pattern, will change to }% to get an unique identifier.
    tasks = tasks.split("},").join("}%")
    // get all the JSON's with every time that find a %
    const allTasksString = tasks.split('%')
    // as allTaskString is an array of string, based on that, I'll save an array of JSON's.
    for (let task of allTasksString) {
      taskArray.push(JSON.parse(task));
    }
    // sort the array
    taskArray.sort((a, b) => {
      const firstTitle = a.title.toLowerCase();
      const secondTitle = b.title.toLowerCase();
      return (firstTitle < secondTitle) ? -1 : (firstTitle > secondTitle) ? 1 : 0;
    });
  }
  return taskArray;
}

/**
 * This function is to get all the matches based on a query.
 * If there are no matches, will return an empty array
 * Otherwise, will return an array with all the matches
 * This avoid create different methods to search based on different parameters.
 * and add scalability
 * @param query is a json with the parameter to search. example: { status: 'DONE'}
 */
export const getAllMatchesTasks = (query) => {
  // we need to get all the tasks already saved
  const tasks = getTasks();
  // here, we filter all the tasks based on the query param
  const allMatches = tasks.filter((task) => {
    // get all the keys of the query json, ex: ['title', 'status']
    const keys = Object.keys(query);
    // check if all the values of search parameters match with the values of the task, example:
    //'title'=> task.title === query.title
    // 'status' => task.status === query.status
    const isMatch = keys.every((key) => task[key] === query[key]);
    return isMatch;
  });
  // sort the results
  allMatches.sort((a, b) => {
    const firstTitle = a.title.toLowerCase();
    const secondTitle = b.title.toLowerCase();
    return (firstTitle < secondTitle) ? -1 : (firstTitle > secondTitle) ? 1 : 0;
  });
  return allMatches;
}

/**
 * This function is to get the first match based on a query.
 * If there are no matches, will return undefined
 * Otherwise, will return the first element matched
 * This avoid create different methods to search based on different parameters.
 * and add scalability
 * @param query is a json with the parameter to search. example: { status: 'DONE'}
 */
export const getOneMatchTask = (query) => {
  //get all the task saved
  const tasks = getTasks();
  // the same than getAllMatchesTasks but instead of use filter, use find 
  // and it makes that finish in the moment that find the first match
  return tasks.find((task) => Object.keys(query).every((key) => task[key] === query[key]));
}
/**
/**This function is to update an element based in a query and update parameters
 * This avoid create different methods to update based on different parameters.
 * and add scalability
 * @param {*} query is a json with the parameter to search. example: { title: 'firstTask', status: 'DONE'}
 * @param {*} update is a json with the parameter to update. example: { status: 'TO DO'}
 */
export const update = (query, update) => {
  // get all the task
  const tasks = getTasks();
  // get the index of the array of task where match with the query
  // this is the task to update
  const taskIndex = tasks.findIndex((task) => Object.keys(query).every((key) => task[key] === query[key]));
  // if taskIndex = -1, it means that there is not the task searched.
  // and return false that means that it doesn't update nothing.
  if (taskIndex === -1) {
    return false;
  }
  // Otherwise, get the element in that index.
  let task = tasks[taskIndex];
  // iterates in every key of the update json to update all the parameters
  for (let key of Object.keys(update)) {
    // if the key of the json update is not a key that already exist in the task
    // return false that means that it doesn't update nothing.
    if (!task[key]) {
      return false;
    }
    // Otherwise, update the key
    task[key] = update[key]
  }
  // set the task updated before as the new json that replaces the old json
  tasks[taskIndex] = task;
  //create the new array to save with the updated task
  let newTaskArray = []
  for (let taskItem of tasks) {
    // convert all the jsons in the array in a json string.
    newTaskArray.push(JSON.stringify(taskItem));
  }
  // save in the localstorage as string
  localStorage.setItem(LOCAL_STORAGE_KEY, newTaskArray.toString());
  // return true that means that it updated the task.
  return true;
}

/**
 * This function is to delete all the tasks
 */
export const deleteAllTasks = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

/**
 * This function is to delete a task based on a query
 * if we add a delete button, this function is very helpful
 * This avoid create different methods to delete based on different parameters.
 * and add scalability
 * @param query is a json with the parameter to search. example: { title: 'firstTask', status: 'DONE'}
 */
export const deleteTask = (query) => {
  // get all the tasks
  const tasks = getTasks();
  // get the index of the array of task where match with the query
  // this is the task to delete
  const taskIndex = tasks.findIndex((task) => Object.keys(query).every((key) => task[key] === query[key]));
  // if taskIndex = -1, it means that there is not the task searched.
  // and return false that means that it doesn't delete nothing.
  if (taskIndex === -1) {
    console.log('is not possible delete an unexisting item!')
    return false;
  }
  // Otherwise, delete the task in the position found before
  tasks.splice(taskIndex, 1);
  //create the new array to save with the deleted task
  let newTaskArray = []
  for (let taskItem of tasks) {
    // convert all the jsons in the array in a json string.
    newTaskArray.push(JSON.stringify(taskItem));
  }
  // save in the localstorage as string
  localStorage.setItem(LOCAL_STORAGE_KEY, newTaskArray.toString());
  // return true that means that it deleted the task.
  return true;
}
