import React from 'react';
import ReactDOM, {render} from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App/App';

import Expenses from './Expenses'
import Invoices from './Invoices'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='expenses' element={<Expenses/>}></Route>
      <Route path='invoices' element={<Invoices/>}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

