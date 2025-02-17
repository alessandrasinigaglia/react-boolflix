import { useState } from "react";
import { useAppDataContext } from "../context/AppDataContext";
import axios from "axios"


export default function SearchBar() {
    const [search, setSearch] = useState("");

    const {setMovies} = useAppDataContext()

    const handleSearch = (e) => {
        e.preventDefault();

        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "971e3767b14bc37cb33c1872ffbde5f4",
                query: search,
            },
        }).then((res) => setMovies(res.data.results));
        
        axios.get("https://api.themoviedb.org/3/search/tv", {
            params: {
                api_key: "971e3767b14bc37cb33c1872ffbde5f4",
                query: search,
            },
        }).then((res) => {
            setMovies(prevMovies => [...prevMovies, ...res.data.results]);
        });
    }

    return (
        <form onSubmit={handleSearch}>
        <input
            type="search"
            placeholder="Cerca..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Cerca</button>
    </form>
    
    )
}