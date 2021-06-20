import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <ul>
          <li style={{color:'white'}}><span className='logo'>Flipkart </span> <br></br>
          Explore<span style={{color:'yellow'}}>Plus</span></li>
           
          
        </ul>
      </nav>


      <div>
        <Sidebar />
      </div>


      
    </div>
  )
}

export default App
