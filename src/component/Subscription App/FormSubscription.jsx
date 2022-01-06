import { useState } from "react";
const FormSubscription = (props) => {
  // const [title, setTitle] = useState();
  // If you want to use the state in the component, you need to use the hook useState,
  // and you need to pass the initial value to the hook.
  // but if their is big form so we have to use below code
  const [form, setForm] = useState({
    userTitle: "",
    userAmount: "",
    userDate: "",
  });
  const onTitleChangeHandler = (events) => {
    setForm((prevState) => {
      return { ...prevState, userTitle: events.target.value };
    });
  }; // prevState react will insure every time of rerender
  //that its my form initial state
  // not outdated one.
  // by default prevstate is by usestate.
  const onAmountChangeHandler = (events) => {
    setForm((prevState) => {
      return { ...prevState, userAmount: events.target.value };
    });
  };
  const onDateChangeHandler = (events) => {
    setForm((prevState) => {
      return { ...prevState, userDate: events.target.value };
    });
  };
  const onSubmitHandler = (events) => {
    events.preventDefault();
    const Subscription = {
      title: form.userTitle,
      amount: form.userAmount,
      date: new Date(form.userDate),
    };
    props.onSave(Subscription);
    // by onsave as a props we can pass data to parent component
    // this subscription send data of input as a props to new subscription file
    console.log("on submit", Subscription);
  };
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={onTitleChangeHandler}
          value={form.userTitle}
        ></input>
      </div>
      <div>
        <label>Amount</label>
        <input
          type="text"
          onChange={onAmountChangeHandler}
          value={form.userAmount}
        ></input>
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          onChange={onDateChangeHandler}
          value={form.userDate}
        ></input>
      </div>

      <div>
        <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
export default FormSubscription;
