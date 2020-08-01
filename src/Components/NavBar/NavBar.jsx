import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <>
      <div className="container-fluid bg-light p-2 ml-0 mr-3 mt-3 navBar">
        <h1 className='text-center taskManagertxt' > Task Manger </h1>
      </div>
    </>
  );
}

export default NavBar;
