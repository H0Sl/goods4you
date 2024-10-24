import React from 'react';
import PageRouter from './components/PageRouter';
import './style/main.css';
import {BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
       <PageRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App
