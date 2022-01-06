const Filter = (props) => {
  const onSelectHandler = (events) => {
    console.log("onSelect filter", events.target.value);
    props.onFilterChange(events.target.value);
  };
  return (
    <div>
      <div className="filter_control" style={{ padding: "20px" }}>
        <label>Filter by year</label>
        <select value={props.selectValue} onChange={onSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
