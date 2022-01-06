const Container = (props) => {
  const classes = "container " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Container;
// add css file of container
// this exapmple of props.children
