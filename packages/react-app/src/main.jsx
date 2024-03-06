import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1.jsx'
import './index.css'
import '../../quark-demo/lib/index'

// import 'codemirror/addon/mode/multiplex';
// import 'codemirror/mode/html/html';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
