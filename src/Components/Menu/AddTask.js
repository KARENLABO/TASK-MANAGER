function save_localstorage(jsonNew) {

  let allTasks = localStorage.getItem('allTasks');

  if (!allTasks) {
    allTasks = [JSON.stringify(jsonNew)];
    localStorage.setItem('allTasks', allTasks);
  } else {
    console.log(allTasks)
    let newItem = [allTasks];
    newItem.push(JSON.stringify(jsonNew));
    localStorage.setItem('allTasks', newItem.toString());
    readElementsFromLS();
  }
}
const readElementsFromLS = () => {
  let elements = localStorage.getItem('allTasks');
  if (!elements) {
    console.log("there is no elements");
  } else {
    let e = elements.split("},").join("}")
    console.log(e)
    /*for (let element of e) {
      console.log(JSON.stringify(element));
    }*/
  }
}
// const fixString = (element) => {
//   element =
// }


export default save_localstorage;

