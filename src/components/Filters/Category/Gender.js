import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import styles from "../Filters.module.scss";

const Gender = ({ updatePageNumber, updateSearchGender }) => {
  const [isOpen, setIsOpen] = useState(false); // Use state to manage open/close

  const toggleAccordion = () => setIsOpen(!isOpen); // Function to toggle accordion

  let genders = ["Female", "Male", "Genderless", "Unknown"]; // Gender options

  return (
    <div className={styles.accordion} id="GenderAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingGender">
          {/* Adjusted button setup similar to Status component */}
          <button
            className={`accordion-button collapsed ${styles.accordionButton}`}
            onClick={toggleAccordion} // Handle click to toggle
            aria-expanded={isOpen}
            aria-controls="collapseGender"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ flex: 1, textAlign: 'left' }}>Gender</span>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '18px',
                lineHeight: '1',
                flexShrink: 0,
              }}
            >
              {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </button>
        </h2>
        {isOpen && (
          <div
            id="collapseGender"
            className="accordion-collapse collapse show"
            aria-labelledby="headingGender"
          >
            <div className="accordion-body">
              {genders.map((item, index) => (
                <FilterBTN
                  task={updateSearchGender}
                  updatePageNumber={updatePageNumber}
                  key={index}
                  value="gender"
                  index={index}
                  items={item}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gender;
