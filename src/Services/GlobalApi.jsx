import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = "dad2450cd6a964c12a15f2428300c2e0";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=dad2450cd6a964c12a15f2428300c2e0';

//https://api.themoviedb.org/3/movie/550?api_key=dad2450cd6a964c12a15f2428300c2e0
const getTrandingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrandingVideos,
    getMovieByGenreId
}