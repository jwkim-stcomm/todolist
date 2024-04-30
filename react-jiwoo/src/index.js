import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Title from './Components/Title';
import List from './Components/List';
import AddList from './Components/AddList';
import Count from './Components/Count';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title tit='공부하지우' des='Jiwoo Todo List'/>
    <div className="content-wrap">
      <ul className="list-wrap">

        <List tit='숨쉬기'/>
        <List tit='잠자기'/>
        <List tit='똥싸기'/>
        
      </ul>

      <AddList />
    </div>
    <Count />
  </React.StrictMode>
);
reportWebVitals();
