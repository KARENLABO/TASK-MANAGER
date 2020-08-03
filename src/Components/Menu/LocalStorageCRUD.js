import { LOCAL_STORAGE_KEY } from '../../constants'

export const saveTask = (task) => {
  let allTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!allTasks) {
    allTasks = [JSON.stringify(task)];
    localStorage.setItem(LOCAL_STORAGE_KEY, allTasks);
  } else {
    allTasks = [allTasks];
    allTasks.push(JSON.stringify(task));
    localStorage.setItem(LOCAL_STORAGE_KEY, allTasks.toString());
  }
}

export const getTasks = () => {
  let tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  let taskArray = []
  if (!tasks) {
    console.log("there is no elements");
  } else {
    tasks = tasks.split("},").join("}%")
    const allTasksString = tasks.split('%')
    for (let task of allTasksString) {
      taskArray.push(JSON.parse(task));
    }
    taskArray.sort((a, b) => {
      const firstTitle = a.title.toLowerCase();
      const secondTitle = b.title.toLowerCase();
      return (firstTitle < secondTitle) ? -1 : (firstTitle > secondTitle) ? 1 : 0;
    });
  }
  return taskArray;
}

export const getAllMatchesTasks = (query) => {
  const tasks = getTasks();

  const allMatches = tasks.filter((task) => {
    const keys = Object.keys(query);
    // ['title', 'status']
    const isMatch = keys.every((key) => task[key] === query[key]);
    //'title'=> task.title === query.title
    // 'status' => task.status === query.status
    return isMatch;
  });
  allMatches.sort((a, b) => {
    const firstTitle = a.title.toLowerCase();
    const secondTitle = b.title.toLowerCase();
    return (firstTitle < secondTitle) ? -1 : (firstTitle > secondTitle) ? 1 : 0;
  });
  return allMatches;
}

export const getOneMatchTask = (query) => {
  const tasks = getTasks();
  return tasks.find((task) => Object.keys(query).every((key) => task[key] === query[key]));
}

export const update = (query, update) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => Object.keys(query).every((key) => task[key] === query[key]));
  if (taskIndex === -1) {
    return false;
  }
  let task = tasks[taskIndex];
  for (let key of Object.keys(update)) {
    if (!task[key]) {
      return false;
    }
    task[key] = update[key]
    //task.status = update.status
  }
  tasks[taskIndex] = task;
  let newTaskArray = []
  for (let taskItem of tasks) {
    newTaskArray.push(JSON.stringify(taskItem));
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, newTaskArray.toString());
  return true;
}

export const deleteAllTasks = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export const deleteTask = (query) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => Object.keys(query).every((key) => task[key] === query[key]));
  if (!taskIndex) {
    console.log('is not possible delete an unexisting item!')
    return false;
  }
  tasks.splice(taskIndex, 1);
  let newTaskArray = []
  for (let taskItem of tasks) {
    newTaskArray.push(JSON.stringify(taskItem));
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, newTaskArray.toString());
  return true;
}
