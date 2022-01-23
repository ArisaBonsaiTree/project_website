import React from 'react';
import ReactDOM, {render} from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';

import Project from './Project/Project';
import Contact from './Contact/Contact';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<MainPage/>}/>
      <Route exact path='/projects' element={<Project/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      
    </Routes>
  </BrowserRouter>,
  rootElement
);

