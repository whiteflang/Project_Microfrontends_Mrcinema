import { tap } from "rxjs";
import MoviesListService from "../../services/MoviesListService";
import React, { useState, useEffect } from "react";
import { Movie } from "../../services/MoviesListService";

export function MoviesListComponent() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    const movieservice = MoviesListService();
    movieservice
      .pipe(
        tap((data) => {
          console.log(data);
          setMovies(data);
        })
      )
      .subscribe();
  }, []);

  return (
    <div className="main-content">
      <ul className="MoviesListTitle">
        <li>Name</li>
        <li>Image</li>
        <li>Relase Year</li>
        <li>Votes</li>
        <li>Billboard</li>
        <li>Actions</li>
      </ul>
      <div className="MoviesList">
        {movies.map((movie, index) => (
          <div key={index} className="MovieCard">
             <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
            </label>
            <p>{movie.title}</p>
            <img className="place" src={`https://placehold.co/400`} />
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
