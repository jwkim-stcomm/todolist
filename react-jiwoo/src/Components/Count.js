import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);
  const plus = ()=> {
    setCount(count+1);
  }
  const minus = ()=> {
    setCount(count-1);
  }

  return (
    <div className="count-script-wrap">
      <p>숫자세지우</p>
      <div className="counting-wrap">
        <p className="count-numb">{count}</p>
        <div className="btn-wrap">
          <button className="count-btn plus" onClick={plus}>
            <i className="fa-solid fa-plus" />
          </button>
          <button className="count-btn minus" onClick={minus}>
            <i className="fa-solid fa-minus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Count;
