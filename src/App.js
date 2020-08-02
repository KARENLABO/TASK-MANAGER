import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Menu from '../src/Components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container-fluid bg-white RootContainer'>
      <div className='row  principalrow'>
        <div className='col-3 mr-0'>
          <Menu />
        </div>
        <div className='col-9 ml-0'>
          <div className='row'>
            <NavBar />
          </div>
          <div className='row col-6 bg-light py-1 mt-4 mr-2 titleTask' >
            <h1 className='lead'> TO DO</h1>
          </div>
          <div className='row col-6 bg-light py-1 mt-4 mr-2 titleTask'>
            <h1 className='lead'> DONE</h1>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
