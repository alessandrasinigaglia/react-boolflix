import { useAppDataContext } from "../context/AppDataContext";

export default function Main() {
    const { movies } = useAppDataContext();

    const getFlagUrl = (languageCode) => {
        return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${languageCode.toUpperCase()}.svg`;
    };

    return (
        <main>
            <h2>Lista Films</h2>
            <ul>
                {
                    movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <li key={index}>
                            <h3>{movie.title}</h3> 
                            <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
                            
                            <p><strong>Lingua:</strong> 
                                <img src={getFlagUrl(movie.original_language)} />
                                {movie.original_language}
                            </p>  
                            
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
