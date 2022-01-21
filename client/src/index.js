import React from 'react';
import ReactDOM, {render} from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';

import Expenses from './Expeneses/Expenses'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<MainPage/>}/>
      <Route path='expenses' element={<Expenses/>}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

