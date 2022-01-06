import { useState } from "react";
import FormSubscription from "./FormSubscription";

const NewSubscription = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveData = (data) => {
    const subscriptionData = { ...data, id: Math.random().toString() };
    props.onAddSubscription(subscriptionData);
    setShowForm(false);
    console.log("on save", subscriptionData);
  };
  const showFormHandler = () => {
    setShowForm(true);
    console.log(showForm);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new_subscription" style={{ paddingTop: "30px" }}>
      {showForm && (
        <FormSubscription onSave={onSaveData} onCancel={hideFormHandler} />
      )}
      <button type="button" onClick={showFormHandler}>
        Add new
      </button>
    </div>
  );
};

export default NewSubscription;
