import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        console.log(response.data);
        setFilms(response.data);
      })
      .catch(error => {
        console.log("data error api", error);
      });
  }, []);

  return (
    <div className="film">
      {films.map((film) => {
        return (
          <MovieCard
            key={film.id}
            title={film.title}
            description={film.description}
            director={film.director}
            release_date={film.release_date}
          />
        )
      })}

    </div>
  );
}
