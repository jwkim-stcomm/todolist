function AddList() {
  return (
    <div className="new-todo-wrap">
      <p>New List</p>
      <div className="add-todo-wrap">
        <input className="add-input" type="text" placeholder="shit right here" />
        <button className="add-btn">ADD TODO</button>
      </div>
    </div>
  );
}

export default AddList;
