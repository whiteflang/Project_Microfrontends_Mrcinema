import React from 'react';
import ReactDOM from 'react-dom'; // Corregir la importación de react-dom
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // Utilizar ReactDOM.render en lugar de ReactDOM.createRoot
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres medir el rendimiento de la aplicación, puedes mantener el siguiente código
reportWebVitals();