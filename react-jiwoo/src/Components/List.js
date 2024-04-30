function List(props) {
  return (
    <li>

      <div className="list-content-wrap">
        <p className="list-text">{props.tit}</p>
        <div className="btn-wrap">
          <i className="fa-solid fa-check" />
          <i className="fa-solid fa-pen" />
          <i className="fa-solid fa-trash" />
        </div>
      </div>

    </li>
  );
}

export default List;
