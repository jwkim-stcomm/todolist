import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Title from './Components/Title';
import Todo from './Components/Todo';
import Count from './Components/Count';
import Study from './Components/Study';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title tit='공부하지우' des='투두지우' onChangeMode={()=>{
      alert('짜쟌!');
    }}/>
    <div className="content-wrap">
      <Todo/>
    </div>
    <Count />
    <Study />
  </React.StrictMode>
);
reportWebVitals();
