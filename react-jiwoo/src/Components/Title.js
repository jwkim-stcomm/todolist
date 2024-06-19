function Title(props) {
  return (
    <div className="title-wrap" onClick={function(e){
e.preventDefault();
props.onChangeMode();
    }}>
        <h1>{props.tit}</h1>
        <p>{props.des}</p>
    </div>
  );
}

export default Title;
