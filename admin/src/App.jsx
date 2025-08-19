import React from 'react';
import Navbar from './componets/Navbar/Navbar.jsx'
import Sidebar from './componets/sidebar/sidebar.jsx';
import { Routes,Route  } from 'react-router-dom';
import Orders from './pages/Orders/Orders.jsx';
import List from './pages/List/List.jsx';
import Add from './pages/Add/Add.jsx';
 import { ToastContainer,  } from 'react-toastify';

function App() {
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className='app-content'> 
        <Sidebar />
       <Routes>
            <Route path="/add" element={<Add/>} />
            <Route path="/list" element={<List />} />
            <Route path="/Orders"element={<Orders/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App;