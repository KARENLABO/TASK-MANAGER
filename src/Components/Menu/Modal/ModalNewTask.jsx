import React, { useContext, useState } from 'react';
import './ModalNewTask.css'
import { TasksContext } from '../../Context/ContextTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { saveTask } from './../LocalStorageCRUD'
import { STATUS_TO_DO, TITLE, DESCRIPTION, STORY_POINTS } from './../../../constants'

function ModalNewTask() {
  // we import the statates that we are going to use from context
  const { show, setShow } = useContext(TasksContext);
  let infoTemplate = { title: '', description: '', storyPoints: '', status: STATUS_TO_DO };

  const [infoModal, setInfoModal] = useState(infoTemplate);
  const [isTitleSelected, setTitleSelected] = useState(false);
  const [isDescriptionSelected, setDescriptionSelected] = useState(false);
  const [isStoryPointsSelected, setStoryPointsSelected] = useState(false);
  const handleClose = () => setShow(false);

  const updateElement = (element) => {
    const keyElement = Object.keys(element)
    if (keyElement[0] === 'title') {
      setTitleSelected(true)
    } else if (keyElement[0] === 'description') {
      setDescriptionSelected(true)
    } else if (keyElement[0] === 'storyPoints') {
      setStoryPointsSelected(true)
    }
    for (let key of Object.keys(infoModal)) {
      if (keyElement[0] === key && element[key]) {
        infoTemplate[key] = element[key];
      } else if (keyElement[0] === key && !element[key]) {
        infoTemplate[key] = "";
      } else {
        infoTemplate[key] = infoModal[key];
      }
    }
    setInfoModal(infoTemplate);
  }
  const validationSubmit = () => {
    for (let key of Object.keys(infoModal)) {
      if (infoModal[key] === "") {
        return false;
      }
    }
    return true;
  }

  const save = () => {
    if (validationSubmit()) {
      saveTask(infoModal);
    } else {
      alert('is not possible save because not all the fields are fill')
    }
  }

  const checkTitleSelected = (element) => {
    if (infoModal[element] === '' && isTitleSelected) {
      return true;
    }
    return false;
  }
  const checkDescriptionSelected = (element) => {
    if (infoModal[element] === "" && isDescriptionSelected) {
      return true;
    }
    return false;
  }
  const checkStoryPointsSelected = (element) => {
    if (infoModal[element] === "" && isStoryPointsSelected) {
      return true;
    }
    return false;
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='ModalNewNote'
      >
        <Modal.Header closeButton>
          <Modal.Title >
            <p className='display-6 text-dark text-center'>New Note </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form >
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10" >
                <input
                  value={infoModal.title}
                  onChange={((e) => updateElement({ title: e.target.value.toUpperCase() }))}
                  type="text"
                  className="form-control"
                  id="inputEmail3" />
                {
                  checkTitleSelected(TITLE) && (
                    <div className="alert alert-danger" role="alert">
                      title can not be empty
                    </div>
                  )
                }
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea
                  value={infoModal.description}
                  onChange={((e) => updateElement({ description: e.target.value }))}
                  type="text"
                  className="form-control" id="inputPassword3" />
                {
                  checkDescriptionSelected(DESCRIPTION) && (
                    <div className="alert alert-danger" role="alert">
                      description can not be empty
                    </div>
                  )
                }
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Story Points</label>
              <select
                className="form-control" id="exampleFormControlSelect1"
                value={infoModal.storyPoints}
                onChange={((e) => updateElement({ storyPoints: e.target.value }))}
                onClick={() => setStoryPointsSelected(true)}>
                <option value="">choose how many points</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              {
                checkStoryPointsSelected(STORY_POINTS) && (
                  <div className="alert alert-danger" role="alert">
                    story points can not be empty
                  </div>
                )
              }
            </div>
            <Button type='submit' variant="success" className='aling-rigth' onClick={() => save()}>Save</Button>
          </form>
        </Modal.Body>


      </Modal>
    </>
  )
};

export default ModalNewTask
