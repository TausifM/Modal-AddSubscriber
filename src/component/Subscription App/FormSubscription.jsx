import { useState, useEffect, useReducer } from "react";
const formReducerFn = (latestValue, action) => {
  console.log("in form reducer", latestValue, action);
  if (action.type === "TITLE") {
    return { ...latestValue, userTitle: action.val };
  } else if (action.type === "AMOUNT") {
    return { ...latestValue, userAmount: action.val };
  } else if (action.type === "DATE") {
    return { ...latestValue, userDate: action.val };
  }
  return { userTitle: "", userAmount: "", userDate: "" };
};
const FormSubscription = (props) => {
  // const [title, setTitle] = useState();
  // If you want to use the state in the component, you need to use the hook useState,
  // and you need to pass the initial value to the hook.
  // but if their is big form so we have to use below code
  // const [form, setForm] = useState({
  //   userTitle: "",
  //   userAmount: "",
  //   userDate: "",
  // });
  //when the state updation is occur from various logics so using useReducer
  const [isValid, setValid] = useState(true);
  const [formReducer, setFormReducer] = useReducer(formReducerFn, {
    userTitle: "",
    userAmount: "",
    userDate: "",
  });
  //desturing for name alias

  const { userTitle: titleReducer } = formReducer;
  // above common practice
  const onTitleChangeHandler = (events) => {
    // if (events.target.value.trim().length > 0) {
    //   setValid(true);
    // }
    // setForm((prevState) => {
    //   return { ...prevState, userTitle: events.target.value };
    // });
    setFormReducer({ type: "TITLE", val: events.target.value });
  }; // prevState react will insure every time of rerender
  //that its my form initial state
  // not outdated one.
  // by default prevstate is by usestate.
  const onAmountChangeHandler = (events) => {
    // setForm((prevState) => {
    //   return { ...prevState, userAmount: events.target.value };
    // });
    setFormReducer({ type: "AMOUNT", val: events.target.value });
  };
  const onDateChangeHandler = (events) => {
    // setForm((prevState) => {
    //   return { ...prevState, userDate: events.target.value };
    // });
    setFormReducer({ type: "DATE", val: events.target.value });
  };
  const onSubmitHandler = (events) => {
    events.preventDefault();
    if (formReducer.userTitle.trim().length === 0) {
      setValid(false);
      return;
    }
    const Subscription = {
      title: formReducer.userTitle,
      amount: formReducer.userAmount,
      date: new Date(formReducer.userDate),
    };
    props.onSave(Subscription);

    // by onsave as a props we can pass data to parent component
    // this subscription send data of input as a props to new subscription file
    console.log("on submit", Subscription);
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("using effect");
      if (titleReducer.trim().length > 0) {
        setValid(true);
      }
    }, 3000);
    return () => {
      clearTimeout(timerId);
      console.log("clean up");
    };
  }, [titleReducer]);
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={onTitleChangeHandler}
          value={formReducer.userTitle}
          // style={{ color: !isValid ? "red" : "green" }}
          style={{ borderColor: !isValid ? "red" : "green" }}
        ></input>
      </div>
      <div>
        <label>Amount</label>
        <input
          type="text"
          onChange={onAmountChangeHandler}
          value={formReducer.userAmount}
        ></input>
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          onChange={onDateChangeHandler}
          value={formReducer.userDate}
        ></input>
      </div>

      <div>
        <button
          type="submit"
          className="btn-danger my-2"
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
      <div>
        <button type="submit" className="btn-primary my-2">
          Save
        </button>
      </div>
    </form>
  );
};
export default FormSubscription;
