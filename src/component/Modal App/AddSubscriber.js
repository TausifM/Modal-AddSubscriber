import Container from "./Container";
import "./AddSubscriber.css";
import { useState } from "react";
import ErrorModel from "./ErrorModel";
const AddSubscriber = (props) => {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  const onNameChange = (events) => {
    setName(events.target.value);
  };
  const onPincodeChange = (events) => {
    setPincode(events.target.value);
  };
  const onSubmitHandler = (events) => {
    events.preventDefault();
    if (name.trim().length === 0) {
      setError({ title: "Invalid Name", content: "Name is mandatory" });
      return;
    }
    if (pincode.trim().length === 0) {
      setError({ title: "Invalid Pincode", content: "Pincode is mandatory" });
    }
    if (pincode.length < 5 || pincode < 0) {
      setError({ title: "invalid Pincode", content: "Posiive pincode" });
      return;
    }
    setName("");
    setPincode("");
    props.onAddSubscriber(name, pincode);
  };
  // Validator()

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          content={error.content}
          onClose={!error}
        ></ErrorModel>
      )}
      <form onSubmit={onSubmitHandler}>
        <Container className="input">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={onNameChange}
            type="text"
          ></input>
          <label htmlFor="pincode">Pincode</label>
          <input
            id="pincode"
            value={pincode}
            type="number"
            onChange={onPincodeChange}
          ></input>
          <button type="submit" className="btn-primary my-3 p-2">
            Add Subscriber
          </button>
        </Container>
      </form>
    </div>
  );
};

export default AddSubscriber;
