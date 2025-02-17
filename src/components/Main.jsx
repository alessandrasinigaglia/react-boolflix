import { useAppDataContext } from "../context/AppDataContext";

export default function Main() {
    const {movies} = useAppDataContext();

    return (
    <main>
        <h2>lista films</h2>
        <ul>
            {
                movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))
            }
        </ul>
    </main>
    )
}