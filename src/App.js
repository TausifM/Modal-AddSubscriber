import { useState, useCallback } from "react";
import AddSubscriber from "./component/Modal App/AddSubscriber";
import Container from "./component/Modal App/Container";
import SubscriberList from "./component/Modal App/SubscriberList";
import Paragraph from "./component/Modal App/template/Paragraph";
function App() {
  const [subscriberList, setSubscriberList] = useState([]);
  const [show, setShow] = useState(false);
  const [authorize, setAuthorize] = useState(false);
  const onAddSubscriberHandler = (sname, spincode) => {
    setSubscriberList((prevState) => {
      return [
        ...prevState,
        { name: sname, pincode: spincode, id: Math.random().toString() },
      ];
    });
  };
  const onShowHandler = useCallback(() => {
    console.log("in click handler");
    if (authorize) {
      // setShow(!show); such function updatation is not because state are schedule
      // in React i.e we use prevState
      setShow((prevState) => !prevState);
      setAuthorize(false);
      console.log("state scheduling", show, authorize);
    }
  }, [authorize, show]); // this works as a closure
  // we cannot give state updation SetState as a dependanies in useEffect and useCallback
  const authorizeHandler = () => {
    console.log("authoriz handler click");
    setAuthorize(true);
  };
  return (
    <Container>
      <AddSubscriber onAddSubscriber={onAddSubscriberHandler} />;
      <SubscriberList list={subscriberList} />
      <button onClick={authorizeHandler}>Authorize</button>
      <Paragraph show={show} /> {/* false for react memo */}
      <button onClick={onShowHandler}>Show Paragraph</button>
    </Container>
  );
}

export default App;
