import { useEffect, useState } from "react";
import { useAppDataContext } from "../context/AppDataContext";
import axios from "axios";

const getFlagUrl = (languageCode) => {
    const url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${languageCode.toUpperCase()}.svg`;
};

const getImageUrl = (path, size = 'w342') => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
};

export default function Main() {
    const { movies, setMovies } = useAppDataContext(); 
    const [filteredMovies, setFilteredMovies] = useState([]); 

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
                api_key: "971e3767b14bc37cb33c1872ffbde5f4",
            },
        })
        .then((response) => {
            setMovies(response.data.results);
        })
    }, [setMovies]);

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]); 

    return (
        <main>
            <div className="movies-container">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <div key={index} className="movie-card">
                            <img src={getImageUrl(movie.poster_path)} className="movie-poster" alt={movie.title} />
                            <div className="movie-info">
                                <h3>{movie.title}</h3>
                                <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
                                <p><strong>Lingua:</strong> 
                                    <img src={getFlagUrl(movie.original_language)} className="flag-icon" alt={movie.original_language} />
                                    {movie.original_language}
                                </p>
                                <p><strong>Voto:</strong> {movie.vote_average}</p>
                            </div>
                            <div className="movie-description">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nessun risultato trovato.</p> 
                )}
            </div>
        </main>
    );
}
