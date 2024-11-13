import React, { useEffect, useState } from 'react';
import './App.css';
import Add from './component/Add';
import Create from './component/Create';
import { BrowserRouter,
Route,
Routes }
from 'react-router-dom';
import Home from './page/Home';
import Edit from './page/Edit';


function App() {


  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path="/add-user" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/create-user/:id" element={<Create/>}/>
      </Routes>
      
      
    </div>
  
  );
}

export default App;
