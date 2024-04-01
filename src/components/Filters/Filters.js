import React from "react";
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
  return (
    <div className={`d-flex align-items-start justify-content-center gap-3`}>
      {/* Filter by searching for a name*/}
      <div className={`${styles.filters_container} d-flex justify-content-center mb-2`}>
        <Name
          updatePageNumber={updatePageNumber}
          updateSearchName={updateSearchName}
        />
      </div>

      {/* Filter by selecting a status*/}
      <div className={`${styles.filters_container} d-flex justify-content-center mb-2`}>
        {" "}
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />{" "}
      </div>

      {/* Filter by searching for a species*/}
      <div className={`${styles.filters_container} d-flex justify-content-center mb-2`}>
        <Species
          updatePageNumber={updatePageNumber}
          updateSearchSpecies={updateSearchSpecies}
        />
      </div>

      <div className={`${styles.filters_container} d-flex justify-content-center mb-2`}>
        {" "}
        <Gender
          updatePageNumber={updatePageNumber}
          updateSearchGender={updateSearchGender}
        />{" "}
      </div>

      {/* Filter by searching for a type*/}
      <div className={`${styles.filters_container} d-flex justify-content-center mb-2`}>
        <Type
          updatePageNumber={updatePageNumber}
          updateSearchType={updateSearchType}
        />
      </div>

      <div className={`d-flex justify-content-center mb-3`}>
        <button
          className={`${styles.btn} btn btn-danger fs-5 align-self-center`}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
