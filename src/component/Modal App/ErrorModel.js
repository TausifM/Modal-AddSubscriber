import "./ErrorModel.css";
const ErrorModel = (props) => {
  // const Backdrop = () => {
  //     return <div className="backdrop" onClick={props.onClose}></div>
  // }
  // const  Overlay = () => {
  //     return    <Container className="backdrop" onClick={props.onClose}>
  //   <div className="modal">
  //     <header>
  //       <h2>{props.title}</h2>
  //     </header>
  //     <div className="content">
  //       <p> {props.content}</p>
  //     </div>
  //     <footer className="actions">
  //       <button onClick={props.onClose}>Okay</button>
  //     </footer>
  //   </div>
  // </Container>
  // }
  // this is for React.createPortal()
  //<>{React.createPortal(<Backdrop onClick={onClose}></Backdrop>), document.getElementsById("backdrop-root")}</>
  //import ReactDom from react-dom
  // root is define in index.html

  return (
    <div className="backdrop" onClick={props.onClose}>
      <div className="modal">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p> {props.content}</p>
        </div>
        <footer className="actions">
          <button className="btn-success py-2 " onClick={props.onClose}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
