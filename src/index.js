import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TaskContextProviderComponent } from './contexts/TaskContext';
import { AuthContextProviderComponent } from './contexts/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProviderComponent>
    <TaskContextProviderComponent>
      <App />
    </TaskContextProviderComponent>
  </AuthContextProviderComponent>
);
