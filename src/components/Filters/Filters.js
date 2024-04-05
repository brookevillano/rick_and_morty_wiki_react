import React, { useState } from "react";
import Gender from "./Category/Gender";
import Name from "./Category/Name";
import Species from "./Category/Species";
import Status from "./Category/Status";
import Type from "./Category/Type";
import styles from "./Filters.module.scss";

const Filters = ({
  updatePageNumber,
  updateSearchName,
  updateSearchSpecies,
  updateSearchType,
  updateStatus,
  updateSearchGender,
}) => {
  const clear = () => {
    updatePageNumber(1);
    updateSearchName("");
    updateSearchSpecies("");
    updateSearchType("");
    updateStatus("");
    updateSearchGender("");
    window.location.reload(false);
  };

  return (
    <div
      className={`d-flex flex-sm-row align-items-start justify-content-center gap-3`}
    >
      <div
        className={`${styles.filters_container} d-flex justify-content-center mb-2`}
      >
        <Name
          updatePageNumber={updatePageNumber}
          updateSearchName={updateSearchName}
        />
      </div>
      <div
        className={`${styles.filters_container} d-flex justify-content-center mb-2`}
      >
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
      </div>
      <div
        className={`${styles.filters_container} d-flex justify-content-center mb-2`}
      >
        <Species
          updatePageNumber={updatePageNumber}
          updateSearchSpecies={updateSearchSpecies}
        />
      </div>
      <div
        className={`${styles.filters_container} d-flex justify-content-center mb-2`}
      >
        <Gender
          updatePageNumber={updatePageNumber}
          updateSearchGender={updateSearchGender}
        />
      </div>
      <div
        className={`${styles.filters_container} d-flex justify-content-center mb-2`}
      >
        <Type
          updatePageNumber={updatePageNumber}
          updateSearchType={updateSearchType}
        />
      </div>
      <div className={`d-flex justify-content-center mb-3`}>
        <button
          onClick={clear}
          className={`${styles.btn} btn btn-danger fs-5 align-self-center`}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
