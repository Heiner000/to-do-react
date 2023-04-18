import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals'

const toDos = ["walk dog", "dishes", "cook", "change oil"]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MyList theList={toDos} />
  </React.StrictMode>
)

reportWebVitals()