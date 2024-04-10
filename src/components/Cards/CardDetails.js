import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const CardDetails = () => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState({});
  let [pageNumber, updatePageNumber] = useState(parseInt(id, 10));
  let [firstEpisode, setFirstEpisode] = useState({});
  let { name, image, location, origin, gender, status, species } = fetchedData;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((data) => setTotalCharacters(data.info.count))
      .catch((error) =>
        console.error("Failed to fetch characters count:", error)
      );

    async function fetchData() {
      let characterData = await fetch(
        `https://rickandmortyapi.com/api/character/${pageNumber}`
      ).then((res) => res.json());
      updateFetchedData(characterData);

      if (characterData.episode && characterData.episode.length > 0) {
        let firstEpisodeData = await fetch(characterData.episode[0]).then(
          (res) => res.json()
        );
        setFirstEpisode(firstEpisodeData);
      }
    }

    fetchData();
  }, [pageNumber]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Alive":
        return "status-alive";
      case "Dead":
        return "status-dead";
      default:
        return "status-unknown";
    }
  };

  return (
    <div className={`container mt-4`}>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
      <div className={`row justify-content-center ${styles.cardDetailBG} mb-10`}>
        <div className="col-12 d-flex flex-column flex-md-row align-items-center">
          <img
            src={image}
            alt={name}
            className="img-fluid rounded mb-4 mb-md-0"
          />
          <div className="ms-md-4">
            <h1 className="text-wrap">{name}</h1>
            <p>
              <strong>Status:</strong>{" "}
              <span className={getStatusClass(status)}>{status}</span>
            </p>
            <p>
              <strong>Species:</strong> {species}
            </p>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
            <p>
              <strong>Origin:</strong> {origin?.name}
            </p>
            <p>
              <strong>Location:</strong> {location?.name}
            </p>
            {/* Display the first episode name if available */}
            {firstEpisode && (
              <p>
                <strong>First Appearance:</strong> {firstEpisode.name}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.fixedToBottom} col-12 d-flex justify-content-center my-4`}>
        <button
          className={`${styles.custom_btn} ${styles.prev_next_btn} btn btn-primary`}
          onClick={() => updatePageNumber(Math.max(1, pageNumber - 1))}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          className={`${styles.custom_btn} ${styles.prev_next_btn} btn btn-primary`}
          onClick={() => updatePageNumber(pageNumber + 1)}
          disabled={pageNumber >= totalCharacters}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
