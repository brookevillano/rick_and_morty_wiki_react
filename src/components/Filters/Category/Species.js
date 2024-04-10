import React from "react";
import styles from "../Filters.module.scss";

const Species = ({ updatePageNumber, updateSearchSpecies, placeholder }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-2">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          updateSearchSpecies(e.target.value);
        }}
        placeholder="Species"
        type="text"
        className={styles.input}
      />
    </form>
  );
};

export default Species;
