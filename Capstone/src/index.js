import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
function ref() {
  root.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
  );

}

setInterval(ref, 500)
