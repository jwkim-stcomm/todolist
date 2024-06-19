import { useState } from 'react';

function List(props) {
  const [isEdit, setIsEdit] = useState(new Array(props.listData.length).fill(false));
  const [isCheck, setIsCheck] = useState(new Array(props.listData.length).fill(false));
  const [editTit, setEditTit] = useState(props.listData.map(e=>e));
  const list = [];

  const toggleEdit = (i) =>{
    const newIsEdit = [...isEdit];
    newIsEdit[i] = !newIsEdit[i];
    setIsEdit(newIsEdit);
  };
  const toggleCheck = (i) =>{
    const newIsCheck = [...isCheck];
    newIsCheck[i] = !newIsCheck[i];
    setIsCheck(newIsCheck);
  };
  const edit = (e,i) => {
    e.preventDefault();
    toggleEdit(i);
  };

  const check = (e,i) => {
    e.preventDefault();
    toggleCheck(i);
  };

  const remove = (e,i) => {
    e.preventDefault();
    props.removeTodo(i);
  };

  const change = (e,i) => {
    const newEditTit = [...props.listData];
    newEditTit[i].tit = e.target.value;
    setEditTit(newEditTit);
  };

  const update = (e,i) => {
    e.preventDefault();
    const newUpdateTit = props.listData[i].tit;
    props.updateTodo(newUpdateTit,i);
    toggleEdit(i);
  };

  for(let i=0; i<props.listData.length; i++){
    list.push(
    <li key={props.listData[i].id} className={isCheck[i] ? 'checked' : ''}>
        {isEdit[i] ? (
            <form className="list-content-wrap" onSubmit={e=>update(e,i)}>
              <input className="update-input" type="text" name="tit" value={props.listData[i].tit} onChange={e=>change(e,i)}/>
              <button className="update-btn" type="submit">
                <i className="fa-solid fa-check" />
              </button>
            </form>
        ):(
          <div className="list-content-wrap">
            <p className="list-text" onClick={e=>check(e,i)}>{props.listData[i].tit}</p>
            <div className="btn-wrap">
            <button className="update-btn" type="button" onClick={e=>edit(e,i)}>
              <i className="fa-solid fa-pen" />
            </button>
            <button className="delete-btn" type="button" onClick={e=>remove(e,i)}>
              <i className="fa-solid fa-trash" />
            </button>
            </div>
          </div>
        )}
    </li>)
  }

  return list;
}

export default List;
