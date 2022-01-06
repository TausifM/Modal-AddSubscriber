import Subscription from "../Subscription";

const SubscriptionList = (props) => {
  if (props.subscriptions.length === 0) {
    return <h3>No Data Found</h3>;
  }
  return (
    <>
      {props.subscriptions.map((subscription) => (
        <Subscription
          key={subscription.id}
          date={subscription.date.toISOString().slice(0, 10)}
          amount={subscription.amount}
          title={subscription.title}
        />
      ))}
    </>
  );
};

export default SubscriptionList;
//for template related code will be store in this file
// for passing this to App.js file we have to get props from App.js file.
