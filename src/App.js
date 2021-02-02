import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';
import Nav from './Nav';

const App = () => {
  return (
    <div className="App">

      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchURL={requests.fetchTrending} />
      <Row title="Top rated" fetchURL={requests.fetchTopRated} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="War" fetchURL={requests.fetchWarMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Doc" fetchURL={requests.fetchDocumentories} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
    </div>
  );
};

export default App;
