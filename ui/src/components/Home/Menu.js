import React, { useEffect, useState } from "react";
import MovieBox from "../Movie/MovieBox";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=556b85ffaf853c43b792a9a179982d0a";
const Menu = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  // const searchMovie = async (e) => {
  //   e.preventDefault();
  //   console.log("Searching");
  //   try {
  //     const url = `https://api.themoviedb.org/3/search/movie?api_key=556b85ffaf853c43b792a9a179982d0a&query=${query}`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //     setMovies(data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div className="container">
      <div className="grid">
        {movies.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
