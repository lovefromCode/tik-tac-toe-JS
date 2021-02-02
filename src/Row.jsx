import React, { useState, useEffect } from "react";
import instanceAxios from "./axios";
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"; // Append this to your image url

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    // 1st method to fetch response
    // instanceAxios.get(fetchURL).then(res => {
    //     console.log(res.data);
    //     setMovies(res.data.results);
    // })

    // 2nd method to fetch response
    async function fetchData() {
      const requests = await instanceAxios.get(fetchURL);
      console.log(requests.data.results);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);


  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || " ")
      .then((url) => {
        // https://www.youtube.com/watch?v=c6t3bW7kx6E      .......here video id is v="c6t3bW7kx6E"
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(error => console.log(error.message));
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
