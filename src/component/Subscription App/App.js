import { useState } from "react";
import Filter from "./component/Filter";
import NewSubscription from "./component/NewSubscription";
import Container from "./component/Container";
import SubscriptionList from "./component/Subscription/SubscriptionList";
import SubscriptionChart from "./component/Subscription/SubscriptionChart";
import Navbar from "./component/Navbar";
const INTIAL_SUBSCRIPTIONS = [
  {
    id: "1",
    title: "new 1",
    date: new Date("2019", "12", "1"),
    amount: "1201",
  },
  {
    id: "2",
    title: "new 2",
    date: new Date("2020", "12", "4"),
    amount: "11",
  },
  {
    id: "3",
    title: "new 3",
    date: new Date("2021", "1", "16"),
    amount: "120",
  },
];

function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [subscriptions, setSubscriptions] = useState(INTIAL_SUBSCRIPTIONS);
  const filterChangeHandler = (data) => {
    setFilteredYear(data);
    console.log("on filter change", data);
  };
  const addSubscriptionHandler = (data) => {
    subscriptions.push(data);
    setSubscriptions((prevState) => {
      return [data, ...subscriptions];
    });
    // to update data of initial value and for merging updating state by user
    // here use spread operator of subscriptions
    // spread opeator can be used with objects and arrays
    console.log("on add", subscriptions);
  };
  const filterSubscriptions = subscriptions.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  // let content = <h3> No Data Found</h3>;
  // if (filterSubscriptions.length !== 0) {
  //   content = filterSubscriptions.map((subscription) => (
  //     <Subscription
  //       key={subscription.id}
  //       date={subscription.date.toISOString().slice(0, 10)}
  //       amount={subscription.amount}
  //       title={subscription.title}
  //     />
  //   ));
  // }
  // above code is split in SubscriptionList file
  return (
    <Container>
      <Navbar />

      <NewSubscription onAddSubscription={addSubscriptionHandler} />
      <Filter onFilterChange={filterChangeHandler} selectValue={filteredYear} />
      <SubscriptionList subscriptions={filterSubscriptions} />
      <SubscriptionChart filteredSubscriptions={filterSubscriptions} />
      {/* {content} */}
      {/* {filterSubscriptions.length === 0 && <h3>No Data Found </h3>}
      {filterSubscriptions.length !== 0 &&
        filterSubscriptions.map((subscription) => (
          <Subscription
            key={subscription.id}
            date={subscription.date.toISOString().slice(0, 10)}
            amount={subscription.amount}
            title={subscription.title}
          />
        ))} */}

      {/* {filterSubscriptions.length === 0 ? (
        <h3>No Data Found</h3>
      ) : (
        filterSubscriptions.map((subscription) => (
          <Subscription
            key={subscription.id}
            date={subscription.date.toISOString()}
            amount={subscription.amount}
            title={subscription.title}
          />
        ))
      )} */}
    </Container>
  );
}

export default App;
