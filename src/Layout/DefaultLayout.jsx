import {SearchProvider} from "../context/AppDataContext";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
    return (
        <>
        <SearchProvider>
            <Header />
            <main>
                <Outlet />
            </main>
        </SearchProvider>
        
        </>
    )
}