import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Menu/Menu'
import NavBar from '../NavBar/NavBar'



function OptionsNavbarComponents() {
  return (
    <>
      <div className='container-fluid bg-white RootContainer'>
        <div className='row  principalrow'>
          <div className='col-2 mr-0 p-0 fixed-top menuP '>
            <Menu />
          </div>
          <div className='col-10 containerNavAndTask'>
            <div className='row fixed-top navs '>
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsNavbarComponents;
