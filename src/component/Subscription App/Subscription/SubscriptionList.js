import { useContext } from "react";
import SubscriptionContext from "../context store/subscription-context";
import Subscription from "../Subscription";

const SubscriptionList = () => {
  const ctx = useContext(SubscriptionContext);
  if (ctx.subscriptions.length === 0) {
    return <h3>No Data Found</h3>;
  }

  return (
    // <SubscriptionContext.Consumer>
    //   {(ctx) => {
    //     <ul>
    //       {ctx.subscriptionsList.map((subscription) => (
    //         <Subscription
    //           key={subscription.id}
    //           date={subscription.date.toISOString().slice(0, 10)}
    //           amount={subscription.amount}
    //           title={subscription.title}
    //         />
    //       ))}
    //     </ul>;
    //   }}
    // </SubscriptionContext.Consumer>
    <ul className="list">
      {ctx.subscriptionsList.map((subscription) => {
        return (
          <Subscription
            key={subscription.id}
            title={subscription.title}
            amount={subscription.amount}
            date={subscription.date.toISOString().slice(0, 10)}
          />
        );
      })}
    </ul>
  );
};
export default SubscriptionList;
//for template related code will be store in this file
// for passing this to App.js file we have to get props from App.js file.
