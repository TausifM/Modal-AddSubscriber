import "./Container.css";
const Container = (props) => {
  //   const styleC = {
  //     backgroundColor: "white",
  //     boxShadow: "2px",
  //   };
  return <div className={`container ${props.className}`}>{props.children}</div>;
};

export default Container;
