import React from "react";
import styles from "../Filters.module.scss";

const Name = ({ updatePageNumber, updateSearchName }) => {
  return (
    <form className="">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          updateSearchName(e.target.value);
        }}
        placeholder="Name"
        type="text"
        className={styles.input}
      />
    </form>
  );
};

export default Name;
