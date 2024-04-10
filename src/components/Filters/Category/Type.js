import React from "react";
import styles from "../Filters.module.scss";

const Type = ({ updatePageNumber, updateSearchType}) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-2">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          updateSearchType(e.target.value);
        }}
        placeholder="Type"
        type="text"
        className={styles.input}
      />
    </form>
  );
};

export default Type;
