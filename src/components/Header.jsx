import SearchBar from "./SearchBar";

export default function Header() {

    return (
        <header>
            <img src="/img/fontbolt.png" className="logo"></img>
            <div className="searchbar">
            <SearchBar />
            </div>
        </header>
    )
}