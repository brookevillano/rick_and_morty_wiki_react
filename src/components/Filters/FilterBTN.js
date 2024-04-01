import React from "react";

const FilterBTN = ({ value, index, items, task, updatePageNumber }) => {
  return (
    <div>
      <div class="form-check">
        <input
          onClick={() => {
            updatePageNumber(1);
            task(items); // updates the api
          }}
          class="form-check-input"
          type="radio"
          name={value}
          id={`${value}-${index}`}
        />
        <label class="form-check-label" for={`${value}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
