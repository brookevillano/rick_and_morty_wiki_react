import React from "react";

const FilterBTN = ({ value, index, items, task, updatePageNumber }) => {
  return (
    <div>
      <div className="form-check">
        <input
          onClick={() => {
            updatePageNumber(1);
            task(items);        // updates the api
          }}
          className="form-check-input"
          type="radio"
          name={value}
          id={`${value}-${index}`}
        />
        <label className="form-check-label" for={`${value}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
