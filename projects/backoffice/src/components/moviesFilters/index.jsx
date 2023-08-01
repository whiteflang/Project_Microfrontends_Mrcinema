import React from "react";
import "./styles.css";

const moviesFilter = () => {
  return (
    <div className="movies-filter">
      <div className="input-group">
        <label htmlFor="releaseYear">Release year:</label>
        <input type="select" id="releaseYear" />
      </div>
      <div className="input-group">
        <label htmlFor="region">Region:</label>
        <input type="select" id="region" placeholder="Region" />
      </div>
      <div className="input-group">
        <label htmlFor="popularity">Popularity:</label>
        <input type="text" id="popularity" placeholder="Popularity" />
      </div>
      <div className="btn-wrapper">
        <button className="btn">Get movies</button>
      </div>
      
    </div>
  );
};

export default moviesFilter;
