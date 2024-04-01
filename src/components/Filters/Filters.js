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
    <div className={`d-flex align-items-start justify-content-center gap-2 ${styles.filtersContainer}`}>
      {/* Filter by searching for a name*/}
      <form className={`${styles.filter_component}d-flex justify-content-center gap-2 mb-5`}>
        <Name
          updatePageNumber={updatePageNumber}
          updateSearchName={updateSearchName}
        />
      </form>

      {/* Filter by selecting a status*/}
      <div className={`${styles.filter_component} d-flex justify-content-center gap-2 mb-5`}>
        {" "}
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />{" "}
      </div>

      {/* Filter by searching for a species*/}
      <form className={`${styles.filter_component} d-flex justify-content-center gap-2 mb-5`}>
        <Species
          updatePageNumber={updatePageNumber}
          updateSearchSpecies={updateSearchSpecies}
        />
      </form>

      <div className={`${styles.filter_component} d-flex justify-content-center gap-2 mb-5`}>
        {" "}
        <Gender
          updatePageNumber={updatePageNumber}
          updateSearchGender={updateSearchGender}
        />{" "}
      </div>

      {/* Filter by searching for a type*/}
      <form className={`${styles.filter_component} d-flex justify-content-center gap-2 mb-5`}>
        <Type
          updatePageNumber={updatePageNumber}
          updateSearchType={updateSearchType}
        />
      </form>

      <div className={`${styles.filter_component} d-flex justify-content-center gap-2 mb-5`}>
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
