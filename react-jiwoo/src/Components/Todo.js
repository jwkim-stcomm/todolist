import { useState } from 'react';
import List from './List';
import AddList from './AddList';

function Todo() {
  const [listData, setListData] = useState([
    { id: 0, tit: '숨쉬지우'},
    { id: 1, tit: '잠자지우'},
    { id: 2, tit: '밥먹지우'}
  ]);

  const create = (addTit) => {
    const addList = { id: 0, tit: addTit };
    const newAddList = [...listData];
    newAddList.push(addList);
    for (let i=0; i<newAddList.length; i++){
      newAddList[i].id = i;
    }
    setListData(newAddList);
  };

  const remove = (i) => {
    const newListData = [...listData];
    newListData.splice(i,1);
    setListData(newListData);
  };

  const update = (updateTit,idx) => {
    const newListData = [...listData];
    const updateData = { id: idx, tit: updateTit };
    for (let i=0; i<newListData.length; i++){
      if(newListData[i].id === idx){
        newListData[i] = updateData;
        break;
      }
    }
    setListData(newListData);
  };

  return (
    <>
      <ul className="list-wrap">
        <List listData={listData} removeTodo={remove} updateTodo={update}/>
      </ul>
      <AddList listData={listData} createTodo={create}/>
    </>
  );
}

export default Todo;
