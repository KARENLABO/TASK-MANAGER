import React, { useContext, useState } from 'react';
import './ModalNewTask.css'
import { TasksContext } from '../../Context/ContextTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


function ModalNewTask() {
  // we import the statates that we are going to use from context
  const { show, setShow } = useContext(TasksContext);
  let infoTemplate = { title: '', description: '', storyPoints: '', status: "" };
  const [infoModal, setInfoModal] = useState(infoTemplate)

  // const saveModalInfo = {
  //   title: '',
  //   description: '',
  //   storyPoints: '',
  //   status: false,
  // }

  const handleClose = () => setShow(false);


  const updateElement = (element) => {
    console.log(element)
    for (let key of Object.keys(element)) {
      infoTemplate[key] = element[key];
    }
    setInfoModal(infoTemplate);
  }

  console.log(infoModal);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >
            <p classname='display-4 text-dark text-center'> Add New Note </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form >
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input value={infoModal.title} onChange={((e) => updateElement({ title: e.target.value }))} type="text" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea value={infoModal.description} onChange={((e) => updateElement({ description: e.target.value }))} type="text" className="form-control" id="inputPassword3" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Story Points</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>


            <div className="form-group row">
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">Mark as Done </label>
                </div>
              </div>
            </div>
            <Button type='submit' variant="success">Save</Button>
          </form>
        </Modal.Body>




      </Modal>
    </>
  )
};

export default ModalNewTask
