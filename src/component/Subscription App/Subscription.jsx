const Subscription = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Title : {props.title}</li>
        <li className="list-group-item">Amount : {props.amount}</li>
        <li className="list-group-item">Date : {props.date}</li>
      </ul>
    </div>
  );
};

export default Subscription;
