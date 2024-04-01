import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import styles from "../Filters.module.scss";

const Status = ({ updateStatus, updatePageNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className={styles.accordion} id="StatusAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingStatus">
          <button
            className={`accordion-button collapsed ${styles.accordionButton}`}
            onClick={toggleAccordion}
            aria-expanded={isOpen}
            aria-controls="collapseStatus"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between', // This will ensure items are aligned to each end
            }}
          >
            <span style={{ flex: 1, textAlign: 'left' }}>Status</span> 
            <span
              className="material-symbols-outlined"
              style={{ 
                fontSize: '18px', 
                lineHeight: '1',
                textAlign: 'right', // Ensures text alignment but might not be necessary for icons
                flexShrink: 0, // Prevents the icon from shrinking
              }}
            >
              {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </button>
        </h2>
        {isOpen && (
          <div
            id="collapseStatus"
            className="accordion-collapse collapse show"
            aria-labelledby="headingStatus"
          >
            <div className="accordion-body">
              {status.map((item, index) => (
                <FilterBTN
                  task={updateStatus}
                  updatePageNumber={updatePageNumber}
                  key={index}
                  value="status"
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

export default Status;
