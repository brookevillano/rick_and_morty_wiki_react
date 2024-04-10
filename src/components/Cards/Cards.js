import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status, species } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className={`col-sm-6 col-md-4 mb-4 position-relative text-dark ${styles.custom_col}`}
        >
          <div className={`${styles.cards} h-100  ${styles.cardHoverEffect}`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`}></img>
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-5 fw-bold">{name}</div>
              <div className="fs-6">
                {(() => {
                  if (status === "Dead") {
                    return (
                      <div className={``}>
                        <span class={`${styles.dead}`}>●</span> {status}
                        {" - "}
                        {species}
                      </div>
                    );
                  } else if (status === "Alive") {
                    return (
                      <div className={``}>
                        <span class={`${styles.alive}`}>●</span> {status}
                        {" - "}
                        {species}
                      </div>
                    );
                  } else {
                    return (
                      <div className={``}>
                        <span class={`${styles.unknown}`}>●</span> {status}
                        {" - "}
                        {species}
                      </div>
                    );
                  }
                })()}
              </div>
              <hr></hr>
              <div className="">
                <span
                  className="material-symbols-outlined fs-7"
                  style={{ fontSize: "14px" }}
                >
                  location_on
                </span>{" "}
                {location.name}
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <div className={`${styles.display} mb-3 fs-5`}>
        No Characters Found :(
      </div>
    );
  }

  return <>{display}</>;
};

export default Cards;
