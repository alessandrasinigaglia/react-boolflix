import { useAppDataContext } from "../context/AppDataContext";

const getFlagUrl = (languageCode) => {
    const url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${languageCode.toUpperCase()}.svg`;
    return url || 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UN.svg';
};

const getImageUrl = (path, size = 'w342') => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
};

export default function Main() {
    const { movies } = useAppDataContext();

    return (
        <main>
            <ul>
            {
            movies.length > 0 ? (
            movies.map((movie, index) => (
            <li key={index}>
            <img src={getImageUrl(movie.poster_path)} className="movie-poster"/>
                <h3>{movie.title}</h3> 
                    <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
                    <p><strong>Lingua:</strong> 
                        <img src={getFlagUrl(movie.original_language)} className="flag-icon"/>
                            {movie.original_language}</p>  
                    <p><strong>Voto:</strong> {movie.vote_average}</p>
            </li>
          ))
          ) : (
            <li>Nessun risultato trovato.</li>
            )
            }
            </ul>
        </main>
    );
}

