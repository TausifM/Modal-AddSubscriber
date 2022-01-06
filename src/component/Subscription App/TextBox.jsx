import { useState } from "react";

const TextBox = ({ heading }) => {
  const [text, setText] = useState("");
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };
  return (
    <>
      <h1 style={{ padding: "20px" }}>{heading}</h1>
      <div className="container mx-3 my-3">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "200px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={handleUppercase}
        >
          Convert to Uppercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Summary</h2>
        <p>{text.split(" ").length} words </p> and
        <p>{text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <div className="container" style={{ width: "10%" }}>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextBox;

//concepts how to handle events and
// chnages the state.
