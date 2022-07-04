import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {EmployeeProvider} from './EmployeeContext';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

