import React from 'react';
import ReactDOM from 'react-dom/client'; // 从 react-dom/client 导入 createRoot
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"


import App from './App';

// A more efficient way to render the root component
const rootElement = document.getElementById('root');

// 使用 createRoot 代替 ReactDOM.render!!!
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
