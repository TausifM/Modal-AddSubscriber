import { useState } from "react";
import AddSubscriber from "./component/Modal App/AddSubscriber";
import Container from "./component/Modal App/Container";
import SubscriberList from "./component/Modal App/SubscriberList";
function App() {
  const [subscriberList, setSubscriberList] = useState([]);
  const onAddSubscriberHandler = (sname, spincode) => {
    setSubscriberList((prevState) => {
      return [
        ...prevState,
        { name: sname, pincode: spincode, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Container>
      <AddSubscriber onAddSubscriber={onAddSubscriberHandler} />;
      <SubscriberList list={subscriberList} />
    </Container>
  );
}

export default App;
