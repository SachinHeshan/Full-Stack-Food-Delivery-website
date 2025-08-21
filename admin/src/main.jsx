import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Fixed casing

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter> {/* Correct component name */}
      <App />
    </BrowserRouter>
 
);