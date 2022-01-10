import React from "react";

const Paragraph = (props) => {
  console.log("paragraph componnent");
  return <div>{props.show ? <p>this is paragraph</p> : ""}</div>;
};

export default React.memo(Paragraph);
// when parent is not exicuted then child also stop from re-evaluation
// by using React.memo() when number component is their.
// when app render not paragraph component re evaluate so i use usecallback hook