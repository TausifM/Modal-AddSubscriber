import React from "react";

const SubscriptionContext = React.createContext({
  subscriptionsList: [],
});
// custom context provider below
// const SubscriptionContextProvider = (props) => {

//   return (
//     <SubscriptionContext.Provider value={/* pass praoper and attribute */}>
//       {props.children}
//     </SubscriptionContext.Provider>
//   );
// };
export default SubscriptionContext;
// {} because it is Filter Handler Function in App .js
// IDE is notify by []

// LIMITATION OF USING CONTEXT
// 1. Context is not for a button
// 2. Not optimized for frequently changing data in that case props used
// 3. context is only use when you have data chaining.
