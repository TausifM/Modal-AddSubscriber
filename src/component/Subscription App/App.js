import { useEffect, useState } from "react";
import Filter from "./Filter";
import NewSubscription from "./NewSubscription";
import Container from "./Container";
import SubscriptionList from "./Subscription/SubscriptionList";
import SubscriptionChart from "./Subscription/SubscriptionChart";
import Navbar from "./Navbar";
import SubscriptionContext from "./context store/subscription-context";
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
    date: new Date("2021", "09", "05"),
    amount: "120",
  },
];

function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [subscriptions, setSubscriptions] = useState(INTIAL_SUBSCRIPTIONS);

  const addSubscriptionHandler = (data) => {
    //subscriptions.push(data); you can add either this way or below ways
    setSubscriptions((prevState) => {
      return [data, ...subscriptions];
    });
    // to update data of initial value and for merging updating state by user
    // here use spread operator of subscriptions
    // spread opeator can be used with objects and arrays
    console.log("on add save", subscriptions);
  };
  const filterChangeHandler = (data) => {
    setFilteredYear(data);
    localStorage.setItem("filteredYear", data);
    console.log("on filter change", data);
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
  // Local Storage is used to store the user Year
  useEffect(() => {
    if (localStorage.getItem("filteredYear")) {
      setFilteredYear(localStorage.getItem("filteredYear"));
      console.log(
        "in effect localstrorage",
        localStorage.getItem("filteredYear")
      );
    }
  }, []);
  return (
    <Container>
      <Navbar />
      <NewSubscription onAddSubscription={addSubscriptionHandler} />
      <Filter onFilterChange={filterChangeHandler} selectValue={filteredYear} />
      {/* data Passing by using Context Dt: 8/1/22*/}
      <SubscriptionContext.Provider value={{ subscriptionsList: [] }}>
        {/* If you want to pass function in Context Provider you can us 
        dummy & pass that function handler eg- dummy: filterChangeHandler */}
        {/* Context is used when forarding data and creating chain just like
        form subscription and new subscrition */}
        <SubscriptionList subscriptions={filterSubscriptions} />
        <SubscriptionChart filteredSubscriptions={filterSubscriptions} />
      </SubscriptionContext.Provider>

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
