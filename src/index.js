import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChatContextProvider } from './context/ChatGpt';
import MyRoutes from './MyRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatContextProvider>
    <BrowserRouter>
      <App />
      <MyRoutes />
    </BrowserRouter>
  </ChatContextProvider>
);
