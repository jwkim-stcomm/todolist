import { useState } from 'react';

function AddList(props) {
  const [addInput, setAddInput] = useState('');

  const inputValue = e =>{
    e.preventDefault();
    setAddInput(e.target.value.trim());
  }

  const addTodo = e => {
    e.preventDefault();
    for(let i=0; i<props.listData.length; i++){
      if(props.listData[i].tit === addInput){
        alert('똑같지우!');
        setAddInput('');
        return false;
      }
    }
    if(addInput !== ''){
      props.createTodo(addInput);
      setAddInput('');
    }else {
      alert('작성하지우');
    }
  };

  return (
    <div className="new-todo-wrap">
      <p>리스트추가하지우</p>
      <form className="add-todo-wrap" onSubmit={addTodo}>
        <input className="add-input" type="text" name="tit" value={addInput} onChange={inputValue} placeholder="작성하지우" />
        <button className="add-btn" type="submit">추가하지우</button>
      </form>
    </div>
  );
}

export default AddList;
