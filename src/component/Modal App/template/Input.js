import React, { useRef, useImperativeHandle } from "react";
import "./input.css";
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    value: inputRef.current.value,
  }));
  // when error as we cannot use ref in our custom components because it reserve
  // word then useImperativeHandle helps to define ref value
  // as we are use this from parent to custom data flow
  // simply we are doing mapping of parent value in forwrd ref
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        ref={inputRef}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      ></input>
    </>
  );
});

export default Input;
// we directly use ref by props as it is reserve hooks and keyword of react
// so use it we can do Forward ref and useImperativeHandle function of react
