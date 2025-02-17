import Header from "./components/Header";
import Main from "./components/Main";

import { AppDataProvider } from "./context/AppDataContext";

export default function App() {
    return (
        <>
            <AppDataProvider>
                <Header />
                <Main />
            </AppDataProvider>
        </>
    );
}

