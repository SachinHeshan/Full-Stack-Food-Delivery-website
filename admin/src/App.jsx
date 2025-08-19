import React from 'react';
import Navbar from './componets/Navbar/Navbar.jsx'
import Sidebar from './componets/sidebar/sidebar.jsx';
import { Routes,Route  } from 'react-router-dom';
import Orders from './pages/Orders/Orders.jsx';
import List from './pages/List/List.jsx';
import Add from './pages/Add/Add.jsx';
 import { ToastContainer,  } from 'react-toastify';

function App() {

  const url = "http://localhost:4000"
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className='app-content'> 
        <Sidebar />
       <Routes>
            <Route path="/add" element={<Add url={url}/>} />
            <Route path="/list" element={<List  url={url}/>} />
            <Route path="/Orders"element={<Orders url={url}/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App;