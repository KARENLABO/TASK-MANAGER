import React, { useContext, useState } from 'react';
import './ModalNewTask.css'
import { TasksContext } from '../../Context/ContextTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { saveTask } from './../LocalStorageCRUD'
import { STATUS_TO_DO } from './../../../constants'

function ModalNewTask() {
  // we import the statates that we are going to use from context
  const { show, setShow } = useContext(TasksContext);
  let infoTemplate = { title: '', description: '', storyPoints: '', status: STATUS_TO_DO };
  const [infoModal, setInfoModal] = useState(infoTemplate)



  const handleClose = () => setShow(false);


  const updateElement = (element) => {
    console.log(element)
    for (let key of Object.keys(infoModal)) {
      if (element[key]) {
        infoTemplate[key] = element[key];
      } else {
        infoTemplate[key] = infoModal[key];
      }
    }
    setInfoModal(infoTemplate);
  }
  const save = () => {
    saveTask(infoModal);
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
                <input value={infoModal.title} onChange={((e) => updateElement({ title: e.target.value.toUpperCase() }))} type="text" className="form-control" id="inputEmail3" />
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
              <select className="form-control" id="exampleFormControlSelect1" value={infoModal.storyPoints} onChange={((e) => updateElement({ storyPoints: e.target.value }))}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <Button type='submit' variant="success" onClick={() => save()}>Save</Button>
          </form>
        </Modal.Body>




      </Modal>
    </>
  )
};

export default ModalNewTask
