import { useState } from "react";
import AddSubscriber from "./AddSubscriber";
import Container from "./Container";
import SubscriberList from "./SubscriberList";
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
