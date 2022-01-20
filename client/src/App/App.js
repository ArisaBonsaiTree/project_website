import React from 'react'
import {Link} from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <>
      <div className="header">
        <h1>API Workshop</h1>
      </div>
      
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link className='linkRouter' to='/invoices'>Invoices</Link>
        <br />
        <Link className='linkRouter' to='/expenses'>Expenses</Link>

      </nav>

      
    </>

    
  )
}

export default App;
