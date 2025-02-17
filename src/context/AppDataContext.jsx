import { createContext, useState, useContext } from "react";

const AppDataContext = createContext();

function AppDataProvider({ children }) {
    const [movies, setMovies] = useState([]);

    return (
        <AppDataContext.Provider value={{ movies, setMovies }}>
            {children}
        </AppDataContext.Provider>
    );
}

function useAppDataContext() {
    const context = useContext(AppDataContext);
    return context;
}

export { AppDataProvider, useAppDataContext, AppDataContext };
