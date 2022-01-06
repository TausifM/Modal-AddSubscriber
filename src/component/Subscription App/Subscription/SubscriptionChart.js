import Chart from "../Chart/Chart";

const SubscriptionChart = (props) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "July",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  for (const subscription of props.filteredSubscriptions) {
    const month = subscription.date.getMonth();
    chartData[month].value += subscription.amount;
  }
  return <Chart dataSets={chartData} />;
};

export default SubscriptionChart;
// this file is for creating data set of charts
