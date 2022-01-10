import Container from "./Container";
import "./AddSubscriber.css";
import { useRef, useState } from "react";
import ErrorModel from "./ErrorModel";
import Input from "./template/Input";
const AddSubscriber = (props) => {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState();
  const nameInputRef = useRef("");
  const onNameChange = (events) => {
    setName(events.target.value);
  };
  const onPincodeChange = (events) => {
    setPincode(events.target.value);
  };
  const onSubmitHandler = (events) => {
    events.preventDefault();
    // Validator()
    if (nameInputRef.current.value.trim().length === 0) {
      setError({ title: "Invalid Name", content: "Name is mandatory" });
      return;
    }
    if (pincode.trim().length === 0) {
      setError({ title: "Invalid Pincode", content: "Pincode is mandatory" });
    }
    if (pincode.length < 5 || pincode < 0) {
      setError({ title: "invalid Pincode", content: "Positive pincode" });
      return;
    }
    setName("");
    setPincode("");
    props.onAddSubscriber(name, pincode);
  };
  const onCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          content={error.content}
          onClose={onCloseHandler} // or !error , but prevState => !prevState much better
        ></ErrorModel>
      )}
      <form onSubmit={onSubmitHandler}>
        <Container className="input">
          {/* <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={onNameChange}
            type="text"
          ></input> */}
          <Input
            id="name"
            type="text"
            ref={nameInputRef}
            onChange={onNameChange}
            label="Name"
          />
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

// we cannot pass Ref directly as a props.
