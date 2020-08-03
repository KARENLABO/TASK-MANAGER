import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <>
      <div className="container-fluid bg-light  ml-0 mr-3  shadow-sm p-3   rounded navBar">
        <h1 className='text-center taskManagertxt ' > Task Manager </h1>
      </div>
    </>
  );
}

export default NavBar;
