import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["walk the dog", "wash dishes", "cook dinner", "change oil"]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MyList theList={toDos} />
)