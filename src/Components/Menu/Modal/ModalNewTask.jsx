import React, { useContext } from 'react';
import './ModalNewTask.css'
import { TasksContext } from '../../Context/ContextTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


function ModalNewTask() {
  // we import the statates that we are going to use from context
  const { show, setShow } = useContext(TasksContext);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Add New Note </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
              <div class="col-sm-10">
                <textarea type="text" class="form-control" id="inputPassword3" />
              </div>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Story Points</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>


            <div class="form-group row">
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label" for="gridCheck1">Mark as Done </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default ModalNewTask
