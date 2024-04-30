function Count() {
  return (
    <div className="count-script-wrap">
      <p>Count Script</p>
      <div className="counting-wrap">
        <p className="count-numb">0</p>
        <div className="btn-wrap">
          <button className="count-btn plus">
            <i className="fa-solid fa-plus" />
          </button>
          <button className="count-btn minus">
            <i className="fa-solid fa-minus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Count;
