const API_KEY = "b0da976c5c9878830197b72bdfc96bfd";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`,
    // fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchWarMovies : `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentories : `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;