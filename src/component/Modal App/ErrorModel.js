import "./ErrorModel.css";
const ErrorModel = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p> {props.content}</p>
        </div>
        <footer className="actions">
          <button onClick={props.onClose}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
